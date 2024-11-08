import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Character } from '../Character/Character';
import { IHero, IPlanet, ISpecie } from '../../../services/types';
import { ReactFlowProvider } from '@xyflow/react';

describe('Character Component', () => {
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

    const mockSpecie: ISpecie = {
        averageHeight: '180',
        averageLifespan: '120',
        classification: 'mammal',
        created: '2024-10-25T21:57:00Z',
        designation: 'sentient',
        edited: '2024-10-25T21:57:00Z',
        eyeColors: 'blue, green, brown',
        hairColors: 'blond, brown, black',
        homeworld: 1,
        language: 'Galactic Basic',
        name: 'Human',
        people: [1, 2, 3],
        films: [1, 2, 3],
        skinColors: 'fair, dark',
        url: 'https://swapi.dev/api/species/1/',
    };

    const mockPlanet: IPlanet = {
        climate: 'arid',
        created: '2024-10-25T21:57:00Z',
        diameter: '10465',
        edited: '2024-10-25T21:57:00Z',
        films: [1, 2, 3],
        gravity: '1 standard',
        name: 'Tatooine',
        orbitalPeriod: '304',
        population: '200000',
        residents: [1, 2, 3],
        rotationPeriod: '23',
        surfaceWater: '1',
        terrain: 'desert',
        url: 'https://swapi.dev/api/planets/1/',
    };

    it('displays character information correctly', () => {
        render(
            <ReactFlowProvider>
                <Character data={{ character: mockCharacter, specie: mockSpecie, planet: mockPlanet }} />
            </ReactFlowProvider>
        );

        expect(screen.getByAltText(mockCharacter.name)).toBeInTheDocument();
        expect(screen.getByText(mockCharacter.name)).toBeInTheDocument();
        expect(screen.getByText(/Birth year:/i)).toHaveTextContent(mockCharacter.birthYear);
        expect(screen.getByText(/Gender:/i)).toHaveTextContent(mockCharacter.gender);
        expect(screen.getByText(/Specie:/i)).toHaveTextContent(`Specie: ${mockSpecie.name}`);
        expect(screen.getByText(/Homeworld:/i)).toHaveTextContent(`Homeworld: ${mockPlanet.name}`);
    });

    it('handles undefined specie and planet gracefully', () => {
        render(
            <ReactFlowProvider>
                <Character data={{ character: mockCharacter, specie: undefined, planet: undefined }} />
            </ReactFlowProvider>
        );

        expect(screen.getByAltText(mockCharacter.name)).toBeInTheDocument();
        expect(screen.getByText(mockCharacter.name)).toBeInTheDocument();
        expect(screen.getByText(/Birth year:/i)).toHaveTextContent(mockCharacter.birthYear);
        expect(screen.getByText(/Gender:/i)).toHaveTextContent(mockCharacter.gender);
        expect(screen.getByText(/Specie:/i)).toHaveTextContent('Specie:');
        expect(screen.getByText(/Homeworld:/i)).toHaveTextContent('Homeworld:');
    });
});
