import { useShowAnimation } from '../../hooks/useShowAnimation';
import './Title.css';

export const Title = () => {
    const showAnimation = useShowAnimation();

    return (
        <h1 className={`title${showAnimation.isVisible ? ' _show' : ''}`}>
            <span className="title-first">Star Wars</span>
            <span className="title-second">Heroes</span>
        </h1>
    );
};
