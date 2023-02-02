import axios from "axios";
import type { AxiosInstance } from "axios";
import { JRequestConfig, JRequestInterceptors } from "./type";
import wasaRequestData from "./wasa";

class JRequest {
  instance: AxiosInstance;
  interceptors?: JRequestInterceptors;

  constructor(config: JRequestConfig) {
    this.instance = axios.create(config);
    this.interceptors = config?.interceptors;

    // 从congfig获取对应实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptors,
      this.interceptors?.requestInterceptorsCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptors,
      this.interceptors?.responseInterceptorsCatch
    );

    // 给所有的实例添加拦截器
    this.instance.interceptors.request.use(
      (req) => {
        req.data = { ...wasaRequestData };
        return req;
      },
      (err) => {
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        return err;
      }
    );
  }

  request(config: JRequestConfig): Promise<any> {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => reject(err));
    });
  }

  get(config: JRequestConfig): Promise<any> {
    return this.request({ ...config, method: "GET" });
  }

  post(config: JRequestConfig): Promise<any> {
    return this.request({ ...config, method: "POST" });
  }

  delete(config: JRequestConfig): Promise<any> {
    return this.request({ ...config, method: "DELETE" });
  }

  patch(config: JRequestConfig): Promise<any> {
    return this.request({ ...config, method: "PATCH" });
  }
}

export default JRequest;
