import { IFilm } from '../../../services/types';
import './Film.css';

interface Props {
    data: IFilm
}

export const Film = ({data}: Props) => {

    return (
        <div className="film">
            <p className="film-label">movie:</p>
            <p className="film-name">
                {data.title}
            </p>
        </div>
    );
};
