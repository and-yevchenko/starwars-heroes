import { Handle, Position } from '@xyflow/react';
import { IHero, IPlanet, ISpecie } from '../../../services/types';
import './Character.css';

interface Props {
    character: IHero,
    specie: ISpecie | undefined,
    planet: IPlanet | undefined ,
    statusPlanet: string,
    statusSpecie: string,
}

export const Character = (props:Props) => {

    return (
    <div className='character'>
        <img className='character-img' src={`https://starwars-visualguide.com/assets/img/characters/${props.character.id}.jpg`} alt={props.character.name} />
        <p className='character-name'>{props.character.name}</p>
        <div className='character-info'>
            <p>Birth year: {props.character.birth_year}</p>
            <p>Gender: {props.character.gender}</p>
            <p>Specie: {props.specie?.name || props.statusSpecie === 'pending' && 'Loading...' || props.statusSpecie === 'error' && 'Unknown'}</p>
            <p>Homeworld: {props.planet?.name || props.statusPlanet === 'pending' && 'Loading...' || props.statusPlanet === 'error' && 'Unknown'}</p>
        </div>
        <Handle
            type="source"
            position={Position.Bottom}
        />
    </div>
    )
}