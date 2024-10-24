import { ReactFlow, useEdgesState, useNodesState } from '@xyflow/react';
import { nodeTypes } from '../../components/Nodes/nodeTypes';
import { IHero } from '../../services/types';

interface Props {
    character: IHero;
    specie: { name: string } | undefined;
    planet: { name: string } | undefined;
    statusPlanet: string;
    statusSpecie: string;
}

export const NodesContainer = (props: Props) => {
    const { character, specie, planet, statusPlanet, statusSpecie } = props;

    const initialNodes = [
        {
            id: '1',
            type: 'character-node',
            position: { x: 0, y: 0 },
            data: {
                character: {
                    id: character?.id || '',
                    name: character?.name || 'Loading...',
                    birth_year: character?.birth_year || 'Loading...',
                    gender: character?.gender || 'Loading...',
                },
                specie: { name: specie?.name || 'Loading...' },
                planet: { name: planet?.name || 'Loading...' },
                statusPlanet: statusPlanet,
                statusSpecie: statusSpecie,
            },
        },
    ];

    const [nodes] = useNodesState(initialNodes);
    const [edges] = useEdgesState([]);

    return (
        <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView />
    );
};
