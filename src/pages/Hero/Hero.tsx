import { useParams } from '@tanstack/react-router';
import './Hero.css';
import { useQuery } from '@tanstack/react-query';
import { getHero } from '../../services/heroService';
import { getPlanet } from '../../services/planetService';
import { getSpacie } from '../../services/specieService';
import { Character } from '../../components/Nodes/Character/Character';
import { IHero, IPlanet, ISpecie } from '../../services/types';
// import { Film } from '../../components/Nodes/Film/Film';
// import { Starship } from '../../components/Nodes/Starship/Starship';
// import '@xyflow/react/dist/style.css';

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


    if (statusCharacter === 'pending') return <p>Loading...</p>
    if (statusCharacter === 'error') return <p>Error</p>


    return (
        <main className='hero-page'>
            <Character character={character} specie={specie} planet={planet} statusPlanet={statusPlanet} statusSpecie={statusSpecie}/>
            {/* {character.films.map((film) => (
                <Film id={film} key={film}/>
            )) } */}
            {/* {character.starships.map((starship) => (
                <Starship id={starship} key={starship} />
            )) } */}
        </main>
    )
};