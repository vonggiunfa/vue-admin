import type { AxiosRequestConfig } from "axios";

export interface JRequestInterceptors {
  requestInterceptors?: (config: any) => any;
  requestInterceptorsCatch?: (error: any) => any;
  responseInterceptors?: (res: any) => any;
  responseInterceptorsCatch?: (error: any) => any;
}

export interface JRequestConfig extends AxiosRequestConfig {
  interceptors?: JRequestInterceptors;
}
