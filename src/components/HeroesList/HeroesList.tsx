import './HeroesList.css';
import { getHeroes } from '../../services/listHeroesService';
import { useCallback, useEffect } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { IHero } from '../../services/types';
import { HeroItem } from '../HeroItem/HeroItem';

export const HeroesList = () => {
    //To work "infinite scroll" it is necessary to useInfiniteQuery from TanStack Query.
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
        // We receive a page from the server, and each time we check the presence of next in the object received from the server using getNextPageParam
    });

    const handleScroll = useCallback(() => {
        // the function that triggers this "infinite scroll"
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

    // Return the status of receiving data from the server
    if (status === 'pending') return <p className="status-message">Loading...</p>
    if (status === 'error') return <p className="status-message">Error: {error.message}</p>

    return (
        <>
            <ul className="heroes-list">
                {status === 'success' && data?.pages.map((page) =>
                    page?.results?.map((hero: IHero) => (
                        <HeroItem key={hero.id} hero={hero} />
                    )),
                )}
            </ul>
            {isFetchingNextPage && (
                <p className="heroes-loading">Loading more heroes...</p>
                // To improve the UI, we display the status of the following elements
            )}
        </>
    );
};
