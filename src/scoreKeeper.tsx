import React from 'react'
import { useState } from 'react';
import ScoreView from './scoreView';

const ScoreKeeper: React.FC = () => {
    const [teamOneScore, setTeamOneScore] = useState<number>(0);
    const [teamTwoScore, setTeamTwoScore] = useState<number>(0);

    return (
    <div>
        <h1>Score Keeper</h1>
        <ScoreView teamName="Team One" score={teamOneScore} />
        <button onClick={() => setTeamOneScore(teamOneScore +1)}>
            +1 Team One
        </button>
        <ScoreView teamName="Team Two" score={teamTwoScore} />
        <button onClick={() => setTeamTwoScore(teamTwoScore +1)}>
            +1 Team Two
        </button>
    </div>
    );
};



export default ScoreKeeper