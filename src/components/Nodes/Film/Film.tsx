import { Handle, Position } from '@xyflow/react';
import { IFilm } from '../../../services/types';
import './Film.css';

interface Props {
    data: IFilm;
}

export const Film = ({ data }: Props) => {
    return (
        <div className="film">
            <p className="film-label">movie:</p>
            <p className="film-name">{data.title}</p>
            <Handle
                type="source"
                position={Position.Right}
                className="circle-edge"
            />
            <Handle
                type="target"
                position={Position.Left}
                className="circle-edge"
            />
        </div>
    );
};
