import { IHero } from '../../services/types';
import './HeroItem.css';

interface HeroItemProps {
    hero: IHero;
}

export const HeroItem = ({ hero }: HeroItemProps) => {

    return (
        <li className='hero-item'>
            <a className='hero-link' href="/" title={hero.name}>
                <img className='hero-img' src={`https://starwars-visualguide.com/assets/img/characters/${hero.id}.jpg`} alt={hero.name} />
                <span className='hero-name'>{hero.name}</span>
            </a>
        </li>
    )
}
