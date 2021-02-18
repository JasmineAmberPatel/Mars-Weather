import React, { useEffect } from 'react';
import getWeatherData from './requests';

function Home() {

  useEffect(() => {
    getWeatherData();
  })

    return (
      <div className="App">
      </div>
    );
}


export default Home;
