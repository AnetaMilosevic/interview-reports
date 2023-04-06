import axios from 'axios';
import { URL } from '../utils/constants';

export const postReport = body => {
  return axios.post(`${URL}/reports`, body);
};

export const getReports = () => {
  return axios.get(`${URL}/reports`);
};

export const getReportById = id => {
  return axios.get(`${URL}/reports?candidateId=${id}`);
};

export const deleteReportById = id => {
  return axios.delete(`${URL}/reports/${id}`);
};
