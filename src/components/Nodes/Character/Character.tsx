import { Handle, Position } from '@xyflow/react';
import { IHero, IPlanet, ISpecie } from '../../../services/types';
import './Character.css';

interface NodeData {
    character: IHero;
    specie: ISpecie | undefined;
    planet: IPlanet | undefined;
}

interface Props {
    data: NodeData;
}

export const Character = ({ data }: Props) => {
    const { character, specie, planet } = data;

    return (
        <div className="character">
            <img
                className="character-img"
                src={`https://starwars-visualguide.com/assets/img/characters/${character.id}.jpg`}
                alt={character.name}
            />
            <p className="character-name">{character.name}</p>
            <div className="character-info">
                <p>Birth year: {character?.birthYear}</p>
                <p>Gender: {character?.gender}</p>
                <p>Specie: {specie?.name}</p>
                <p>Homeworld: {planet?.name}</p>
            </div>
            <Handle
                // This component uses React Flow to display connection points
                type="source"
                position={Position.Right}
                className="circle-edge"
            />
        </div>
    );
};
