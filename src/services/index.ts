import easyRequest from "lf-request";
import { message } from "antd";
import qs from "qs";

const easyRequestInstance = new easyRequest({
  request: [
    (config: any) => {
      if (config.headers["Content-Type"] == "multipart/form-data") {
        return config;
      }
      if (config.method === "post") config.data = qs.stringify(config.data);
      if (localStorage.token) {
        config.headers["Authorization "] = "Bearer " + localStorage.token;
      }
      return config;
    },
  ],
  response: [
    (response: any) => {
      if (response.status !== 200) {
        message.error("服务异常");
      } else if (!response.data.success) {
        message.error(response.data.message);
      }
      return response.data;
    },
    (err) => {
      const { response } = err;
      if (response.status !== 401) {
        message.error("服务异常");
      } else if (!response.data.success) {
        message.error(response.data.message);
      }
    },
  ],
  requestList: [
    { type: "post", url: "login", name: "Login" },
    { type: "get", url: "getPublicKey", name: "getPublicKey" },
    { type: "get", url: "getUserInfo", name: "getUserInfo" },
    { type: "post", url: "register", name: "register" },
  ],
});
const apiList = easyRequestInstance.getApi();

export const Login = apiList.Login;
export const getPublicKey = apiList.getPublicKey;
export const register = apiList.register;
export const getUserInfo = apiList.getUserInfo;
