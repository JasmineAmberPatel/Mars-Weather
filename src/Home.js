import React, { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import day from './store/weather/index'

function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(day);
  })

    return (
      <div className="App">
        <h1>Mars Weather Data</h1>
      </div>
    );
}


export default Home;
