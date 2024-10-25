/* eslint-disable react-hooks/exhaustive-deps */
import { addEdge, Connection, Edge, Node, ReactFlow, useEdgesState, useNodesState } from '@xyflow/react';
import { edgeTypes, nodeTypes } from '../../components/Nodes/nodeTypes';
import { IFilm, IFilmsResponse, IHero, IStarship, IStarshipResponse } from '../../services/types';
import { useCallback, useEffect } from 'react';

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
      id: `${film.id}`,
      type: 'film-node',
      position: { x: 250, y: index * 100 },
      data: {
        title: film.title
      }
    }))

    const starshipNodes = starships.results.map((starship: IStarship, index: number  ) => ({
      id: `${starship.id}`,
      type: 'starship-node',
      position: { x: 500, y: index * 100 },
      data: {
        name: starship.name
      }
    }))

    const filmEdges = films.results.map((film: IFilm) => ({
      id: `${character.name}-${film.id}`,
      type: 'custom-edge',
      source: `${character.name}`,
      target: `${film.id}`
    }))

    const starshipEdges = starships.results.map((starship: IStarship) => {
      return starship.films.map((shipfilm) => ({
        id: `${shipfilm}-${starship.id}`,
        type: 'custom-edge',
        source: `${shipfilm}`,
        target: `${starship.id}`
      }))
    }) .flat()

    const initialNodes: Node[] = [
        {
            id: `${character.name}`,
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

    const initialEdges: Edge[] = [
      ...filmEdges,
      ...starshipEdges
    ];

    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const onConnect = useCallback(
      (params: Connection) => setEdges((eds) => addEdge(params, eds)),
      [setEdges],
    );

    useEffect(() => {
        setEdges([...filmEdges, ...starshipEdges])
        setNodes([
          {
            id: `${character.name}`,
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
          ...starshipNodes])
    }, [])

    return (
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} edgeTypes={edgeTypes} onConnect={onConnect} onEdgesChange={onEdgesChange} onNodesChange={onNodesChange} fitView />
    );
};
