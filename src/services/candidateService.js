import axios from 'axios';
import { URL } from '../utils/constants';

export const getCandidateById = id => {
  return axios.get(`${URL}/candidates/${id}`);
};

export const getCandidates = () => {
  return axios.get(`${URL}/candidates`);
};
