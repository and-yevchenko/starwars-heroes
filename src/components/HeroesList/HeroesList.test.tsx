import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { useInfiniteQuery } from '@tanstack/react-query';
import { HeroesList } from './HeroesList';


vi.mock('@tanstack/react-query', () => ({
    useInfiniteQuery: vi.fn(),
}));

describe('HeroesList', () => {
    
    it('displays loading indicator while data is loading', () => {
        (useInfiniteQuery as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
            status: 'pending',
            data: undefined,
            isError: false,
            fetchNextPage: vi.fn(),
            hasNextPage: false,
        });

        render(<HeroesList />);
        
        const loadingIndicator = screen.getByText(/loading/i);
        expect(loadingIndicator).toBeInTheDocument();
    });

    it('displays error message when there is an error', () => {
        (useInfiniteQuery as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
            status: 'error',
            error: new Error('Failed to fetch heroes'),
        });

        render(<HeroesList />);

        expect(screen.getByText(/failed to fetch heroes/i)).toBeInTheDocument();
    });
});