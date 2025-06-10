import { useEffect } from "react";
import PureCounter from "@srexi/purecounterjs/dist/purecounter"

const StatsComponent = ({ start, end, duration,name }) => {
    useEffect(() => {
        new PureCounter();
    }, []);
    return (
        <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
                <span
                    data-purecounter-start={start}
                    data-purecounter-end={end}
                    data-purecounter-duration={duration}
                    className="purecounter">
                </span>
                <p>{name}</p>
            </div>
        </div>
    );
};

export default StatsComponent;