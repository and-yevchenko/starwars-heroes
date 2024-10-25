import { Handle, Position } from '@xyflow/react';
import { IStarship } from '../../../services/types';
import './Starship.css';

interface Props {
    data: IStarship;
}

export const Starship = ({ data }: Props) => {
    return (
        <div className="starship">
            <p className="starship-label">starship:</p>
            <p className="starship-name">{data.name}</p>
            <Handle
                type="target"
                position={Position.Left}
                className="circle-edge"
            />
        </div>
    );
};
