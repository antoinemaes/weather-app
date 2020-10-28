import React from 'react';
import { connect } from 'react-redux';
import { asyncAction } from "../redux/async";
import fetchWeather from '../redux/weather';

class Weather extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.asyncWeather(this.props.location.latlng);
  }
  
  render() {
    return (
      <div>
        <h1>Weather {this.props.location.name}</h1>
        <p>Lat : {this.props.location.latlng.lat}, Lon : {this.props.location.latlng.lng}</p>
        {(this.props.status == 'idle') && <p>Nothing to see here ...</p>}
        {(this.props.status == 'pending') && <p>Loading ...</p>}
        {(this.props.status == 'success') && <WeatherDisplay weather={this.props.data} />}
        {(this.props.status == 'error') && <p>Oops ! Something went wrong ...</p>}
      </div>
    );
  }
}

function WeatherDisplay(props) {
  return (
    <p>Temperature : {props.weather.main.temp}</p>
  );
}

const mapStateToProps = state => (state.weather);
const mapDispatchToProps = { asyncWeather: asyncAction(fetchWeather) };

const WeatherContainer = connect(mapStateToProps, mapDispatchToProps)(Weather);

export default WeatherContainer;