import { type FC } from "react";
type ScoreViewProps = {
    teamName: string;
    score: number;
};
const ScoreView: FC<ScoreViewProps> = ({ teamName, score}) => {
    return (
        <div>
            <h2>
                {teamName}: {score}
            </h2>
        </div>
    )
};

export default ScoreView