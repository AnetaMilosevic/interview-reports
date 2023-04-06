import axios from 'axios';
import { URL } from '../utils/constants';

export const getCompanies = () => {
  return axios.get(`${URL}/companies`);
};
