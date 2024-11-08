import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Film } from '../Film/Film';
import { IFilm } from '../../../services/types';
import { ReactFlowProvider } from '@xyflow/react';

describe('Film Component', () => {
    const mockFilm: IFilm = {
        id: '1',
        characters: [1, 2, 3],
        created: '2024-10-25T21:57:00Z',
        director: 'George Lucas',
        edited: '2024-10-25T21:57:00Z',
        episodeId: 4,
        openingCrawl: 'It is a period of civil war...',
        planets: [1, 2, 3],
        producer: 'Gary Kurtz',
        releaseDate: '1977-05-25',
        species: [1, 2, 3],
        starships: [1, 2, 3],
        title: 'A New Hope',
        url: 'https://swapi.dev/api/films/1/',
        vehicles: [1, 2, 3],
    };

    it('displays film information correctly', () => {
        render(
            <ReactFlowProvider>
                <Film data={mockFilm} />
            </ReactFlowProvider>
        );

        expect(screen.getByText(/movie:/i)).toBeInTheDocument();
        expect(screen.getByText(mockFilm.title)).toBeInTheDocument();
    });
});
