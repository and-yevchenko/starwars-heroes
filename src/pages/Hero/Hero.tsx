import { useParams } from '@tanstack/react-router';
import './Hero.css';

export const Hero = () => {
    const { id } = useParams({ from: '/hero/$id' });
    
    return <div>Hero ID: {id}</div>;
};