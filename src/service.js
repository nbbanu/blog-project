import axios from "axios";
import { getEnvVar } from "./utils/utils";

const base_api = getEnvVar("BASE_URL");

export const axiosInstance = axios.create({
  baseURL: base_api,
  timeout: 5000,
  headers: {
    "X-Custom-Header": "foobar",
    "Content-type": "application/json; charset=UTF-8",
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
});

const post = async (url, body, headers = {}) => {
  //   return axiosInstance
  //     .post(url, body)
  //     .then((response) => console.log(response))
  //     .catch((error) => error?.response?.data);

  try {
    const res = await axiosInstance.post(url, body, { headers });
    return res?.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const signIn = async (body) => {
  return await post("user/sign-in", body);
};

export const createBlog = async (body, headers) => {
  return await post("blog/create", body, headers);
};

const get = async (url, token) => {
  const request_url = base_api + url;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + token,
    },
  };
  const res = await fetch(request_url, options);
  const data = await res.json();

  return data;
};

export const getAllTopics = async (token) => {
  const url = "topics";
  const data = await get(url, token);
  return data?.data;
};

export const getAllBlogs = async () => {
  const url = "blog/get-all";
  const data = await get(url);
  return data?.data;
}


// export const getAllBlogsById = async (topicId) => {
//   const url = `blog/get-all/${topicId}`;
//   const data  = await get(url,topicId);
//   return data?.data;
// }
