import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './sass/app.scss';
import TopSection from "./components/top/index";
import BottomSection from "./components/bottom/index";
import axios from "axios";

const WEATHER_KEY = "72c3fad9cfaa997b4d791fdd1179a071";
  
class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      cityName: "London",
      numForecastDays: 6
    }
  }
  updateWeather() {
    const { cityName, numForecastDays } = this.state;
    const URL = 'http://api.weatherstack.com/forecast?access_key=' + WEATHER_KEY + '&query=' + cityName + '&forecast_days=' + numForecastDays + '&hourly=1';
    axios.get(URL).then((res) => {
      return res.data;
    })
      .then((data) => {
        this.setState({
          temp_c: data.current.temp_c,
          isDay: data.current.is_day,
          text: data.current.condition.text,
          forecastdays: data.forecast.forecastday
        });
      })
      .catch((err) => {
        if (err)
          console.error("Cannot fetch Weather Data from API, ", err);
      });
  }
  componentDidMount() {
    const { eventEmitter } = this.props;
    this.updateWeather();
    
    eventEmitter.on("updateWeather", (data) => {
      this.setState({ cityName: data }, ()=> this.updateWeather());
    });
  }
  render() {
    const {
      cityName,
      temp_c,
      text,
      forecastdays
    } = this.state;
    return (
      <div className="app-container">
        <div className="main-container">
            <div className="top-section">
              <TopSection
                location={cityName}
                temp_c={temp_c}
                text={text}
                eventEmitter={this.props.eventEmitter}
              />
            </div>
          <div className="bottom-section">
            <BottomSection forecastdays={forecastdays}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
