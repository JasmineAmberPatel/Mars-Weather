import { actions } from './index';
import getWeatherData from '../../requests';

export const getDay = () => async (dispatch) => {
    const { setDay } = actions;

    const day = (await getWeatherData()) || [];
    dispatch(setDay(day));
};