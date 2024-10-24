import { useQuery } from '@tanstack/react-query';
import { getFilm } from '../../../services/filmService';
import './Film.css';
import { IFilm } from '../../../services/types';

interface Props {
    id: number
}

export const Film = (props: Props) => {

    const { data, status } = useQuery<IFilm>({
        queryKey: ['starship', props.id],
        queryFn: () => getFilm(props.id),
    });

    return (
        <div className='film'>
            <p className='film-label'>movie:</p>
            <p className='film-name'>{data?.title || status === 'pending' && 'Loading...' || status === 'error' && 'Unknown'}</p>
        </div>
    )
}
