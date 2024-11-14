import axios from "axios";
import { getEnvVar } from "./utils/utils";
import Swal from "sweetalert2";

const base_api = getEnvVar("BASE_URL");

export const axiosInstance = axios.create({
  baseURL: base_api,
  timeout: 5000,
});

axiosInstance.interceptors.request.use((config) => {
  config.headers["Content-Type"] =
    config.headers?.["Content-Type"] || "application/json; charset=UTF-8";
  config.headers["Accept-Language"] = "tr";
  config.headers["Authorization"] = "Bearer " + localStorage.getItem("token");

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.status === 401) {
      localStorage.removeItem("token");
      Swal.fire({
        title: "Oturum süreniz sona erdi",
        text: "Lütfen tekrar giriş yapınız.",
        color: "#242424",
        icon: "error",
        iconColor: "#ffc016",
      }).then(() => {
        window.location.reload();
      });
    }
    return Promise.reject(error);
  }
);

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

export const createTopic = async (body) => {
  return await post("/topics", body);
};
export const signUp = async (body) => {
  return await post("user/sign-up", body);
};
export const createReadingList = async (body) => {
  return await post("list", body);
};
export const addOrrRemoveBlogToList = async (body) => {
  return await post("list/add-remove-blog", body);
};
// *************** GET ***************
const get = async (url, token) => {
  const request_url = base_api + url;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  const res = await fetch(request_url, options);
  const data = await res.json();

  return data;
};

export const getAllBlogs = async () => {
  const url = "blog/get-all/user";
  const data = await get(url);
  return data?.data;
};

export const getBlogById = async (topicId) => {
  const url = `blog/${topicId}`;
  const data = await get(url, topicId);
  return data?.data;
};

export const getAllCategories = async () => {
  const url = "category";
  const data = await get(url);
  return data?.data;
};
export const getAllCategoryTopics = async () => {
  const url = "category/topics";
  const data = await get(url);
  return data?.data;
};

export const getAllSubcategories = async () => {
  const url = "subcategory";
  const data = await get(url);
  return data?.data;
};
export const getSubcategoryById = async (categoryId) => {
  const url = `subcategory/${categoryId}`;
  const data = await get(url, categoryId);
  return data?.data;
};

export const getAllTopics = async (token) => {
  const url = "topics";
  const data = await get(url, token);
  return data?.data;
};

export const getUserDetailById = async (userId) => {
  const url = `user/detail/${userId}`;
  const data = await get(url, userId);
  return data?.data;
};
export const getMyLists = async () => {
  const url = "list/my-lists";
  const data = await get(url);
  return data?.data;
};

export const getListDetailByBlogId = async (blogId) => {
  const url = `blog/list-detail/${blogId}`;
  const data = await get(url, blogId);
  return data?.data;
};
export const getMyListById = async (listId) => {
  const url = `list/blogs/${listId}`;
  const data = await get(url, listId);
  return data?.data;
};

// *************** PUT ***************
const put = async (url, body, config = {}) => {
  try {
    const res = await axiosInstance.put(url, body, config);
    return res?.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const updateTopics = async (data) => {
  return await put("topics", data);
};

export const updateUserInformation = async (body) => {
  return await put("user", body);
};

export const updateUserImage = async (data) => {
  return await put("user/image", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// *************** DELETE ***************
const deleteRequest = async (url, id) => {
  try {
    const res = axiosInstance.delete(url, id);
    return res?.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteTopic = async (id) => {
  return await deleteRequest(`topics/${id}`);
};
