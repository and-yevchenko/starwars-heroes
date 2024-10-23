import './HeroesList.css';
import { getHeroes } from '../../services/listHeroesService';
import { useCallback, useEffect } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { IHero } from '../../services/types';
import { HeroItem } from '../HeroItem/HeroItem';

export const HeroesList = () => {
    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery({
        queryKey: ['heroesList'],
        queryFn: ({ pageParam = 1 }) => getHeroes(pageParam),
        initialPageParam: 1,
        getNextPageParam: (lastPage) =>
            lastPage.nextPage ? lastPage.nextPage.split('page=')[1] : undefined,
    });

    const handleScroll = useCallback(() => {
        if (
            window.innerHeight + window.scrollY >= document.body.offsetHeight &&
            hasNextPage &&
            !isFetchingNextPage
        ) {
            fetchNextPage();
        }
    }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);


    return status === 'pending' ? (
        <p>Loading...</p>
    ) : status === 'error' ? (
        <p>Error: {error.message}</p>
    ) : (
        <>
            <ul className='heroes-list'>
                {data?.pages.map((page) =>
                    page.results.map((hero: IHero) => (
                        <HeroItem key={hero.id} hero={hero}/>
                    )),
                )}
            </ul>
            {isFetchingNextPage && <p>Loading more heroes...</p>}
        </>
    );
};
