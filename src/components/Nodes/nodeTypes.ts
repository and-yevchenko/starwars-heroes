import { NodeTypes } from '@xyflow/react';
import { Character } from './Character/Character';
import { Film } from "./Film/Film";
import { Starship } from "./Starship/Starship";

export const nodeTypes = {
    'character-node': Character,
    'film-node': Film,
    'starship-node': Starship,
} satisfies NodeTypes;
