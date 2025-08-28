import React, { useEffect, useState } from 'react';
import { MAX, MIN } from './constant';

function ProgressBar({ value = 0 ,onComplete = ()=>{}}) {
    const [percent, setPercent] = useState(value);

    useEffect(() => {
        setPercent(Math.min(MAX, Math.max(value, MIN)));
        if (value>=MAX) {
            onComplete()
        }
    }, [value]);

    return (
        <div className="progress-bar">
            <div
                className="progress-fill"
                // style={{ width: `${percent}%` }}
                style={{ transform: `scaleX(${percent / MAX})`,
            transformOrigin:'left' }}
                role='progressbar'
                aria-valuemin={MIN}
                aria-valuemax={MAX}
                aria-valuenow={percent.toFixed()}
            >
                <span
                    style={{ color: percent > 60 ? 'white' : 'black' }}
                    className="progress-label">{percent.toFixed()}%</span>
            </div>
        </div>
    );
}

export default ProgressBar;
