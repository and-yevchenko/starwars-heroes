import { useParams } from '@tanstack/react-router';
import './Hero.css';
import { useQuery } from '@tanstack/react-query';
import { getHero } from '../../services/heroService';
import { getPlanet } from '../../services/planetService';

export const Hero = () => {
    const { id } = useParams({ from: '/hero/$id' });

    const { data: character, status: statusCharacter } = useQuery({
        queryKey: ['character', id],
        queryFn: () => getHero(id),
    });

    const { data: planet, status: statusPlanet } = useQuery({
        queryKey: ['planet', character?.homeworld],
        queryFn: () => getPlanet(character?.homeworld || null),
        enabled: !!character?.homeworld,
    });
    
    


    if (statusCharacter === 'pending') return <p>Loading...</p>
    if (statusCharacter === 'error') return <p>Error</p>

    return (
        <main className='hero-page'>
            <div className='character'>
                <img className='character-img' src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt={id} />
                <p className='character-name'>{character.name}</p>
                <div className='character-info'>
                    <p>Birth year: {character.birth_year}</p>
                    <p>Gender: {character.gender}</p>
                    <p>Specie: Human</p>
                    <p>Homeworld: {planet?.name || statusPlanet === 'pending' && 'Loading...' || statusPlanet === 'error' && 'Unknown'}</p>
                </div>
            </div>
        </main>
    )
};