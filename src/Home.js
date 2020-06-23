import React from 'react';
import Moment from 'moment';

const lowercaseKeys = require('lowercase-keys')


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sol: '',
      date: '',
      avgTemp: '',
      avgWind: '',
      windDir: '',
      avgPress: '',
    }
  }
  componentDidMount() {
    fetch('https://api.nasa.gov/insight_weather/?api_key=OyLOo9G478lVuhrN6gW5Yxxba0YhGHHeSHaVvCj0&feedtype=json&ver=1.0')
      .then(res => res.json())
      .then(json => {
        lowercaseKeys(json)
        const sol = json.sol_keys[6];
        const date = json[sol].First_UTC;
        const avgTemp = json[sol].AT.av;
        const avgWind = json[sol].HWS.av;
        const windDir = json[sol].WD.most_common.compass_point;
        const avgPress = json[sol].PRE.av;
        this.setState({
          sol: sol,
          date: date,
          avgTemp: avgTemp,
          avgWind: avgWind,
          windDir: windDir,
          avgPress: avgPress
        })
      });
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1>Mars Weather Forecast</h1>
          <p>Sol: {this.state.sol}</p>
          <p>Date: {Moment(this.state.date).format('ddd Do MMM')}</p>
          <p>Average Temperature: {this.state.avgTemp} °C</p>
          <p>Average Wind Speed: {this.state.avgWind} mph</p>
          <p>Wind Direction: {this.state.windDir}</p>
          <p>Average Pressure: {this.state.avgPress} Pa</p>
    </div>
    );
  }
}

export default Home;
