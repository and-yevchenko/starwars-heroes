import { useQuery } from '@tanstack/react-query';
import './Starship.css';
import { getStarship } from '../../../services/starshipService';
import { IStarship } from '../../../services/types';

interface Props {
    id: number
}

export const Starship = (props: Props) => {

    const { data, status } = useQuery<IStarship>({
        queryKey: ['starship', props.id],
        queryFn: () => getStarship(props.id),
    });

    return (
        <div className='starship'>
            <p className='starship-label'>starship:</p>
            <p className='starship-name'>{data?.name || status === 'pending' && 'Loading...' || status === 'error' && 'Unknown'}</p>
        </div>
    )
}