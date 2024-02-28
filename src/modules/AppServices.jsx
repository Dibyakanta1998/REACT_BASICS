import axios from "axios";
import { BASE_URL } from "../config";

export const invoke = async ({ url, data, method, params = {} }) => {
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
      console.log(">>>>err", err.message);
    });
};
