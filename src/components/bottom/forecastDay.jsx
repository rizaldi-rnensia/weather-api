import React from "react";
import SunImg from "../../resources/images/28.png"

export default class ForecastDay extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        const { day } = this.props;
        if (!day) return null;
        return (
            <div className="forecastay-container">
                <div className="text">{day}</div>
                <div className="image"><img src={SunImg} /></div>
                <div className="temperature">32°</div>
            </div>
        );
    }
}