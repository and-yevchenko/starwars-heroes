import { BaseEdge, getStraightPath } from '@xyflow/react';

interface Props {
    id: string;
    sourceX: number;
    sourceY: number;
    targetX: number;
    targetY: number;
    sourcePosition: string;
}

export default function CustomEdge(props: Props) {
    const { id, sourceX, sourceY, targetX, targetY } = props;

    const [edgePath] = getStraightPath({
        sourceX,
        sourceY,
        targetX,
        targetY,
    });

    return <BaseEdge id={id} path={edgePath} />;
}
