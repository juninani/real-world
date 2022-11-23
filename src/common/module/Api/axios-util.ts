import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

type AxiosUtilProps = {
  children: any;
};

interface IResponse {
  code: number;
  description?: any;
}

const defaultResponse = {
  code: 400,
  message: "err",
};

const apiClientInfo: AxiosInstance = axios.create({
  baseURL: "https://api.realworld.io/api",
  timeout: 2000,
});

const { get, put, post, delete: destroy } = apiClientInfo;

const AxiosUtill: React.FC<AxiosUtilProps> = ({ children }) => {
  const navigate = useNavigate(); //로그인용
  apiClientInfo.interceptors.request.use(async (request: any) => {
    request.headers = {
      ...request.headers,
      "X-Request-Host": window.location.origin,
    };
    return request;
  });
  return children;
};
export default AxiosUtill;
export { get, post, destroy, put, defaultResponse };
export type { IResponse };
