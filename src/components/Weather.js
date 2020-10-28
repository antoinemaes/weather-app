import React from 'react';
import { connect } from 'react-redux';
import { asyncAction } from "../redux/async";
import fetchWeather from '../redux/weather';

class Weather extends React.Component {

  componentDidMount() {
    this.props.asyncWeather(this.props.location.latlng);
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.location.latlng !== prevProps.location.latlng) {
      this.props.asyncWeather(this.props.location.latlng);
    }
  }
  
  render() {
    const weather = this.props.weather;
    const location = this.props.location;
    return (
      <div>
        <h1>Weather {location.name}</h1>
        <h2>{location.administrative && (location.administrative + ', ')}{location.country}</h2>
        <p>Lat : {location.latlng.lat}, lon : {location.latlng.lng}</p>
        {(weather.status === 'idle') && <p>Nothing to see here ...</p>}
        {(weather.status === 'pending') && <p>Loading ...</p>}
        {(weather.status === 'success') && <WeatherDisplay weather={weather.data} />}
        {(weather.status === 'error') && <p>Oops ! Something went wrong ...</p>}
      </div>
    );
  }
}

function WeatherDisplay(props) {
  return (
    <ul>
      <li>Temperature : {props.weather.main.temp}</li>
      <li>Feels like : {props.weather.main.feels_like}</li>
      <li>Wind speed : {props.weather.wind.speed}</li>
      <li>Wind direction : {props.weather.wind.deg}</li>
    </ul>
  );
}

const mapStateToProps = state => ({ weather: state.weather });
const mapDispatchToProps = { asyncWeather: asyncAction(fetchWeather) };

const WeatherContainer = connect(mapStateToProps, mapDispatchToProps)(Weather);

export default WeatherContainer;