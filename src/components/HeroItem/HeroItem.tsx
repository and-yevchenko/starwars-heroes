import { IHero } from '../../services/types';
import './HeroItem.css';
import { useShowAnimation } from '../../hooks/useShowAnimation';

interface HeroItemProps {
    hero: IHero;
}

export const HeroItem = ({ hero }: HeroItemProps) => {

    const showAnimation = useShowAnimation()

    return (
        <li className={`hero-item${showAnimation.isVisible ? ' _show' : ''}`}>
            <a className='hero-link' href="/" title={hero.name}>
                <img className='hero-img' src={`https://starwars-visualguide.com/assets/img/characters/${hero.id}.jpg`} alt={hero.name} />
                <span className='hero-name'>{hero.name}</span>
            </a>
        </li>
    )
}
