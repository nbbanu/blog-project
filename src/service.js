import axios from "axios";
import { getEnvVar } from "./utils/utils";

const base_api = getEnvVar("BASE_URL");

export const axiosInstance = axios.create({
  baseURL: base_api,
  timeout: 5000,
  headers: {
    "X-Custom-Header": "foobar",
    "Content-type": "application/json; charset=UTF-8",
  },
});

const post = async (url, body) => {
  //   return axiosInstance
  //     .post(url, body)
  //     .then((response) => console.log(response))
  //     .catch((error) => error?.response?.data);

  try {
    const res = await axiosInstance.post(url,body);
    return res?.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const signIn = async (body) => {
  return await post("user/sign-in", body);
};
