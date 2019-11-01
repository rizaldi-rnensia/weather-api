import React from "react";
import { directive } from "@babel/types";
import ForecastDay from "./forecastDay";

export default class BottomSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { forecastdays } = this.props;
        return (
            <div className="bottom-container">
                <div className="inner-container">
                    {forecastdays && forecastdays.map((day, idx) => {
                        return <ForecastDay day={day} key={idx} />
                    })}
                </div>
            </div>
        );
        
    }
}