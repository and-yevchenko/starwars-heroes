import { Link, useParams } from '@tanstack/react-router';
import './Hero.css';
import { useQuery } from '@tanstack/react-query';
import { getHero } from '../../services/heroService';
import { getPlanet } from '../../services/planetService';
import { getSpacie } from '../../services/specieService';
import {
    IFilmsResponse,
    IHero,
    IPlanet,
    ISpecie,
    IStarshipResponse,
} from '../../services/types';
import '@xyflow/react/dist/style.css';
import { NodesContainer } from './NodesContainer';
import { getFilm } from '../../services/filmService';
import { getStarship } from '../../services/starshipService';

export const Hero = () => {
    const { id } = useParams({ from: '/hero/$id' }); // Go to the page of the selected character
    // TanStack Query is used
    // Getting data on a specific character
    const { data: character, status: statusCharacter } = useQuery<IHero>({
        queryKey: ['character', id],
        queryFn: () => getHero(id),
    });
    // Getting a character planet
    const { data: planet, status: statusPlanet } = useQuery<IPlanet>({
        queryKey: ['planet', character?.homeworld],
        queryFn: () => getPlanet(character?.homeworld || null),
        enabled: !!character?.homeworld,
    });
    // Getting a character species
    const { data: specie, status: statusSpecie } = useQuery<ISpecie>({
        queryKey: ['spacie', character?.species[0]],
        queryFn: () => getSpacie(character?.species[0] || null),
        enabled: !!character?.species[0],
    });
    // Get the films in which the character took part
    const { data: films, status: statusFilms } = useQuery<IFilmsResponse>({
        queryKey: ['starship', character?.films],
        queryFn: () => getFilm(id),
    });
    //Get the spaceships on which the character flew
    const { data: starships, status: statusStarships } =
        useQuery<IStarshipResponse>({
            queryKey: ['starship', character?.starships],
            queryFn: () => getStarship(id),
        });

    // Return the status of data upload
    if (
        statusCharacter === 'pending' ||
        statusPlanet === 'pending' ||
        statusSpecie === 'pending' ||
        statusFilms === 'pending' ||
        statusStarships === 'pending'
    )
        return <p className="status-message">Loading...</p>;
    if (
        statusCharacter === 'error' ||
        statusPlanet === 'error' ||
        statusSpecie === 'error' ||
        statusFilms === 'error' ||
        statusStarships === 'error'
    )
        return <p className="status-message">Error</p>;

    return (
        <main className="hero-page">
            <Link to='/' className='close-link'>close</Link>
            <NodesContainer
                //Created a separate container in which nodes and edges will be initialised
                character={character}
                planet={planet}
                specie={specie}
                films={films}
                starships={starships}
            />
        </main>
    );
};
