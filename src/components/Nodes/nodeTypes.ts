import { NodeTypes } from '@xyflow/react';
import { Character } from './Character/Character';
import { Film } from './Film/Film';
import { Starship } from './Starship/Starship';
import CustomEdge from './CustomEdge';

export const nodeTypes = {
    'character-node': Character,
    'film-node': Film,
    'starship-node': Starship,
} as NodeTypes;

export const edgeTypes = {
    'custom-edge': CustomEdge,
};
