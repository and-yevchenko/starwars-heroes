import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Hero } from '../Hero/Hero';
import { useQuery } from '@tanstack/react-query';

vi.mock('@tanstack/react-router', () => ({
    Link: (props: { to: string, children: React.ReactNode }) => <a href={props.to}>{props.children}</a>,
    useParams: () => ({ id: '1' }),
}));

vi.mock('@tanstack/react-query', () => ({
    useQuery: vi.fn(),
}));

class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
}

globalThis.ResizeObserver = ResizeObserver;

describe('Hero Component', () => {
    const mockCharacter = {
        id: 1,
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        hair_color: 'blond',
        skin_color: 'fair',
        eye_color: 'blue',
        birth_year: '19BBY',
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

    const mockPlanet = {
        climate: 'arid',
        created: '2024-10-25T21:57:00Z',
        diameter: '10465',
        edited: '2024-10-25T21:57:00Z',
        films: [1, 2, 3],
        gravity: '1 standard',
        name: 'Tatooine',
        orbital_period: '304',
        population: '200000',
        residents: [1, 2, 3],
        rotation_period: '23',
        surface_water: '1',
        terrain: 'desert',
        url: 'https://swapi.dev/api/planets/1/',
    };

    const mockSpecie = {
        average_height: '180',
        average_lifespan: '120',
        classification: 'mammal',
        created: '2024-10-25T21:57:00Z',
        designation: 'sentient',
        edited: '2024-10-25T21:57:00Z',
        eye_colors: 'blue, green, brown',
        hair_colors: 'blond, brown, black',
        homeworld: 1,
        language: 'Galactic Basic',
        name: 'Human',
        people: [1, 2, 3],
        films: [1, 2, 3],
        skin_colors: 'fair, dark',
        url: 'https://swapi.dev/api/species/1/',
    };

    const mockFilms = {
        results: [
            {
                id: '1',
                title: 'A New Hope',
                release_date: '1977-05-25',
                director: 'George Lucas',
            },
        ],
    };

    const mockStarships = {
        results: [
            {
                id: '1',
                name: 'X-wing',
                model: 'T-65 X-wing starfighter',
                manufacturer: 'Incom Corporation',
                cost_in_credits: '149999',
                length: '12.5',
                max_atmosphering_speed: '1050',
                crew: '1',
                passengers: '0',
                cargo_capacity: '110',
                consumables: '1 week',
                hyperdrive_rating: '1.0',
                MGLT: '100',
                starship_class: 'Starfighter',
                pilots: [1, 2],
                films: [1, 2],
                url: 'https://swapi.dev/api/starships/12/',
            },
        ],
    };

    it('displays loading indicator while data is loading', () => {
        (useQuery as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
            data: undefined,
            status: 'pending',
        });

        render(<Hero />);

        expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    });

    it('displays error message when there is an error', () => {
        (useQuery as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
            data: undefined,
            status: 'error',
        });

        render(<Hero />);

        expect(screen.getByText(/Error/i)).toBeInTheDocument();
    });

    it('displays character data when loaded', () => {
        (useQuery as unknown as ReturnType<typeof vi.fn>).mockImplementation((queryKey) => {
            switch (queryKey.queryKey[0]) {
                case 'character':
                    return { data: mockCharacter, status: 'success' };
                case 'planet':
                    return { data: mockPlanet, status: 'success' };
                case 'spacie':
                    return { data: mockSpecie, status: 'success' };
                case 'film':
                    return { data: mockFilms, status: 'success' };
                case 'starship':
                    return { data: mockStarships, status: 'success' };
                default:
                    return { data: undefined, status: 'idle' };
            }
        });

        render(<Hero />);

        expect(screen.getByText(/Luke Skywalker/i)).toBeInTheDocument();
        expect(screen.getByText(/Tatooine/i)).toBeInTheDocument();
        expect(screen.getByText(/Human/i)).toBeInTheDocument();
        expect(screen.getByText(/X-wing/i)).toBeInTheDocument();
    });
});
