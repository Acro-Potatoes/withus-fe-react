import { BASE_URL } from '#/contents/api';
import { CommonAPI } from '#/api/type';
import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
    withCredentials: true,
});

const requestSuccessHandler = (config: InternalAxiosRequestConfig) => {
    return config;
};

const requestErrorHandler = (error: AxiosError) => {
    return Promise.reject(error);
};

const responseErrorHandler = (error: AxiosError) => {
    return Promise.reject(error);
};

axiosInstance.interceptors.request.use(
    (config) => requestSuccessHandler(config),
    (error) => requestErrorHandler(error),
);

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => responseErrorHandler(error),
);

export const getAPI: CommonAPI = ({ endPoint, axiosOption }) => {
    return axiosInstance.get(endPoint, axiosOption);
};

export const postAPI: CommonAPI = ({ endPoint, data, axiosOption }) => {
    return axiosInstance.post(endPoint, data, axiosOption);
};

export const putAPI: CommonAPI = ({ endPoint, data, axiosOption }) => {
    return axiosInstance.post(endPoint, data, axiosOption);
};

export const deleteAPI: CommonAPI = ({ endPoint, axiosOption }) => {
    return axiosInstance.post(endPoint, axiosOption);
};

export const fatchAPI: CommonAPI = ({ endPoint, data, axiosOption }) => {
    return axiosInstance.post(endPoint, data, axiosOption);
};
