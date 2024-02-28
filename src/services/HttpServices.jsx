import axios from "axios";
import { BASE_URL } from "../config";

const apiCallService = async ({ url, data, method, params = {} }) => {
  return await axios
    .request({
      baseURL: BASE_URL,
      url,
      method,
      params,
      data,
    })
    .then((result) => {
      // console.log("🚀 ~ result:", result)
      const { data } = result || {};
      return data;
    })
    .catch((err) => {
        const {response:{data={}}={}}=err || {}

      console.log(">>>>err",data.error);
    //   throw Error(err.message)
    });
};

class Http {

  static async get({ url, data, method = "get", params = {} }) {
    const response = await apiCallService({
      url,
      method,
      params,
      data,
    });

    console.log("🚀 ~ Http ~ get ~ response:", response)
    return response;
  }

  static async post({ url, data, method = "post", params = {} }) {
    const response = await apiCallService({
      url,
      method,
      params,
      data,
    });

    return response;
  }

  static async put({ url, data, method = "put", params = {} }) {
    const response = await apiCallService({
      baseURL: BASE_URL,
      url,
      method,
      params,
      data,
    });

    return response;
  }

  static async delete({ url, data, method = "delete", params = {} }) {
    const response = await apiCallService({
      url,
      method,
      params,
      data,
    });

    return response;
  }
}


export default Http