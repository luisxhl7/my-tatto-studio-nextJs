import axios, { AxiosInstance, AxiosRequestConfig, AxiosInterceptorManager, AxiosResponse } from "axios";

interface InternalAxiosRequestConfig<T = any> extends AxiosRequestConfig {
    headers: any;
}

interface MyTattoStudioApiInstance extends AxiosInstance {
    interceptors: {
        request: AxiosInterceptorManager<InternalAxiosRequestConfig>;
        response: AxiosInterceptorManager<AxiosResponse<any>>;
    };
}

const myTattoStudioApi: MyTattoStudioApiInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
});

myTattoStudioApi.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token');

    if (token) {
        if (!config.headers) {
            config.headers = {};
        }
        config.headers['x-token'] = token;
    }

    return config;
});

export default myTattoStudioApi;
