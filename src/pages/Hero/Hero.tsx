import { useParams } from '@tanstack/react-router';
import './Hero.css';
import { useQuery } from '@tanstack/react-query';
import { getHero } from '../../services/heroService';
import { getPlanet } from '../../services/planetService';
import { getSpacie } from '../../services/specieService';
import { IHero, IPlanet, ISpecie } from '../../services/types';
import '@xyflow/react/dist/style.css';
import { NodesContainer } from './NodesContainer';

export const Hero = () => {
    const { id } = useParams({ from: '/hero/$id' });

    const { data: character, status: statusCharacter } = useQuery<IHero>({
        queryKey: ['character', id],
        queryFn: () => getHero(id),
    });

    const { data: planet, status: statusPlanet } = useQuery<IPlanet>({
        queryKey: ['planet', character?.homeworld],
        queryFn: () => getPlanet(character?.homeworld || null),
        enabled: !!character?.homeworld,
    });

    const { data: specie, status: statusSpecie } = useQuery<ISpecie>({
        queryKey: ['spacie', character?.species[0]],
        queryFn: () => getSpacie(character?.species[0] || null),
        enabled: !!character?.species[0],
    });

    if (
        statusCharacter === 'pending' ||
        statusPlanet === 'pending' ||
        statusSpecie === 'pending'
    )
        return <p className="status-message">Loading...</p>;
    if (
        statusCharacter === 'error' ||
        statusPlanet === 'error' ||
        statusSpecie === 'error'
    )
        return <p className="status-message">Error</p>;

    return (
        <main className="hero-page">
            <NodesContainer
                character={character}
                planet={planet}
                specie={specie}
                statusPlanet={statusPlanet}
                statusSpecie={statusSpecie}
            />
        </main>
    );
};
