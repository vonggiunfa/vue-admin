import JRequest from "./request";
import requestConfig from "./request/config";

export const jRequest = new JRequest({
  baseURL: requestConfig.BASE_URL,
  timeout: requestConfig.TIME_OUT,
});
