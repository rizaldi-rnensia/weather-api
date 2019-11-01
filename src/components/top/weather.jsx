import React from "react";
import SunImg from "../../resources/images/32.png"

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { location, temp_c, text } = this.props;
        return (
            <div className="weather-container">
                <div className="header">{location}</div>
                {/* <div className="header">Jakarta</div> */}
                <div className="inner-container">
                    {/* <div className="current-weather">{temp_c}°</div> */}
                    <div className="current-weather">32°</div>
                    <div className="image"><img src= {SunImg}/></div>
                    <div className="real-feel">Real Feel</div>
                </div>
                {/* <div className="footer">{text}</div> */}
                <div className="footer">Sunny</div>
            </div>
        );
    }
}