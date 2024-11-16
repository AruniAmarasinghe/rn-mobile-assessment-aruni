import {Config} from '../../Config/index';
import * as httpClient from '../baseQueries';

export const getNewsData = async token => {
  const url = `${Config.API_URL}/news?category=general`;
  return await httpClient.get(url, null, token);
};

export const getNewsDataWithMinId = async token => {
  const url = `${Config.API_URL}/news?category=general&minId=10`;
  return await httpClient.get(url, null, token);
};
