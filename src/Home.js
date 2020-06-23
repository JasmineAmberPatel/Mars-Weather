import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sol: '',
    }
  }
  componentDidMount() {
    fetch('https://api.nasa.gov/insight_weather/?api_key=OyLOo9G478lVuhrN6gW5Yxxba0YhGHHeSHaVvCj0&feedtype=json&ver=1.0')
      .then(res => res.json())
      .then(json => {
        const sol = json.sol_keys[0]
        this.setState({
          sol: sol,

        })
      });
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <ul>
          {}
        </ul>

      </div>
    );
  }
}

export default Home;
