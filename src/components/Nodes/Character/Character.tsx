import { IHero, IPlanet, ISpecie } from '../../../services/types';
import './Character.css';

interface NodeData {
    character: IHero;
    specie: ISpecie | undefined;
    planet: IPlanet | undefined;
    statusPlanet: string;
    statusSpecie: string;
}

interface Props {
    data: NodeData;
}

export const Character = ({ data }: Props) => {
    const { character, specie, planet, statusPlanet, statusSpecie } = data;

    return (
        <div className="character">
            <img
                className="character-img"
                src={`https://starwars-visualguide.com/assets/img/characters/${character.id}.jpg`}
                alt={character.name}
            />
            <p className="character-name">{character.name}</p>
            <div className="character-info">
                <p>Birth year: {character.birth_year}</p>
                <p>Gender: {character.gender}</p>
                <p>
                    Specie:{' '}
                    {specie?.name ||
                        (statusSpecie === 'pending' && 'Loading...') ||
                        (statusSpecie === 'error' && 'Unknown')}
                </p>
                <p>
                    Homeworld:{' '}
                    {planet?.name ||
                        (statusPlanet === 'pending' && 'Loading...') ||
                        (statusPlanet === 'error' && 'Unknown')}
                </p>
            </div>
        </div>
    );
};
