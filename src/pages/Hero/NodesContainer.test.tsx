import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { IHero, IFilmsResponse, IStarshipResponse } from '../../services/types';
import { ReactFlowProvider } from '@xyflow/react';
import { NodesContainer } from './NodesContainer';

class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
}

globalThis.ResizeObserver = ResizeObserver;

const mockCharacter: IHero = {
    id: 1,
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hairСolor: 'blond',
    skinСolor: 'fair',
    eyeСolor: 'blue',
    birthYear: '19BBY',
    gender: 'male',
    homeworld: 1,
    films: [1, 2, 3],
    species: [1],
    vehicles: [1, 2],
    starships: [1, 2],
    created: '2024-10-25T21:57:00Z',
    edited: '2024-10-25T21:57:00Z',
    url: 'https://swapi.dev/api/people/1/',
};

const mockSpecie = { name: 'Human' };

const mockPlanet = { name: 'Tatooine' };

const mockFilms: IFilmsResponse = {
    results: [
        {
            id: '1',
            title: 'A New Hope',
            releaseDate: '1977-05-25',
            director: 'George Lucas',
            characters: [1, 2, 3],
            created: '2024-10-25T21:57:00Z',
            edited: '2024-10-25T21:57:00Z',
            episodeId: 4,
            openingCrawl: 'It is a period of civil war...',
            planets: [1, 2, 3],
            producer: 'Gary Kurtz',
            species: [1, 2, 3],
            starships: [1, 2],
            url: 'https://swapi.dev/api/films/1/',
            vehicles: [1, 2, 3],
        },
    ],
};

const mockStarships: IStarshipResponse = {
    results: [
        {
            id: '1',
            MGLT: '100',
            cargoCapacity: '110',
            consumables: '1 week',
            costInCredits: '149999',
            created: '2024-10-25T21:57:00Z',
            crew: '1',
            edited: '2024-10-25T21:57:00Z',
            hyperdriveRating: '1.0',
            length: '12.5',
            manufacturer: 'Incom Corporation',
            maxAtmospheringSpeed: '1050',
            model: 'T-65 X-wing starfighter',
            name: 'X-wing',
            passengers: '0',
            films: [1, 2],
            pilots: ['1', '2'],
            starshipClass: 'Starfighter',
            url: 'https://swapi.dev/api/starships/12/',
        },
    ],
};

describe('NodesContainer Component', () => {
    it('renders nodes and edges correctly', () => {
        render(
            <ReactFlowProvider>
                <NodesContainer
                    character={mockCharacter}
                    specie={mockSpecie}
                    planet={mockPlanet}
                    films={mockFilms}
                    starships={mockStarships}
                />
            </ReactFlowProvider>
        );

        expect(screen.getByText(/Luke Skywalker/i)).toBeInTheDocument();
        
        expect(screen.getByText(/X-wing/i)).toBeInTheDocument();
    });
});
