import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Starship } from '../Starship/Starship';
import { IStarship } from '../../../services/types';
import { ReactFlowProvider } from '@xyflow/react';

describe('Starship Component', () => {
    const mockStarship: IStarship = {
        id: '1',
        MGLT: '75',
        cargoCapacity: '100000',
        consumables: '2 months',
        costInCredits: '3500000',
        created: '2024-10-25T21:57:00Z',
        crew: '30-165',
        edited: '2024-10-25T21:57:00Z',
        hyperdriveRating: '2.0',
        length: '150',
        manufacturer: 'Corellian Engineering Corporation',
        maxAtmospheringSpeed: '950',
        model: 'CR90 corvette',
        name: 'Rebel blockade runner',
        passengers: '600',
        films: [1, 2, 3],
        pilots: ['1', '2'],
        starshipClass: 'corvette',
        url: 'https://swapi.dev/api/starships/1/',
    };

    it('displays starship information correctly', () => {
        render(
            <ReactFlowProvider>
                <Starship data={mockStarship} />
            </ReactFlowProvider>
        );

        expect(screen.getByText(/starship:/i)).toBeInTheDocument();
        expect(screen.getByText(mockStarship.name)).toBeInTheDocument();
    });
});
