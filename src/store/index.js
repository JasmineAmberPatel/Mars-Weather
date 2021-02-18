import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import day from './weather/index';

const reducer = combineReducers({
  day,
})

const store = configureStore({
  reducer,
})

export default store;