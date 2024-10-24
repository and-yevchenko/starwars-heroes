import { Node, ReactFlow, useEdgesState, useNodesState } from '@xyflow/react';
import { nodeTypes } from '../../components/Nodes/nodeTypes';
import { IFilm, IFilmsResponse, IHero, IStarship, IStarshipResponse } from '../../services/types';
import { useEffect } from 'react';

interface Props {
    character: IHero;
    specie: { name: string } | undefined;
    planet: { name: string } | undefined;
    films: IFilmsResponse;
    starships: IStarshipResponse;
    statusPlanet: string;
    statusSpecie: string;
}

export const NodesContainer = (props: Props) => {
    const { character, specie, planet, films, starships, statusPlanet, statusSpecie } = props;

    const filmNodes = films.results.map((film: IFilm, index: number  ) => ({
      id: `${film.title}`,
      type: 'film-node',
      position: { x: 250, y: index * 100 },
      data: {
        title: film.title
      }
    }))

    const starshipNodes = starships.results.map((starship: IStarship, index: number  ) => ({
      id: `${starship.name}`,
      type: 'starship-node',
      position: { x: 500, y: index * 100 },
      data: {
        name: starship.name
      }
    }))

    const initialNodes: Node[] = [
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
        ...filmNodes,
        ...starshipNodes
    ];

    const [nodes] = useNodesState(initialNodes);
    const [edges] = useEdgesState([]);

    useEffect(() => {
        console.log(nodes);
    }, [])

    return (
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView />
    );
};
