import api from "./apiConfig"

export const createPost= async (id, input) => {
  try {
    const res = await api.post(`/threads/${id}/posts`, input);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const getPosts = async (id) => {
  try {
    const res = await api.get(`/threads/${id}/posts`);
<<<<<<< HEAD
    console.log(res)
=======
>>>>>>> 74dd7d64ee9588d060eeed53b04dec01f059436b
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const getPost = async (id) => {
  try {
    const res = await api.get(`/posts/${id}`);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const updatePost = async (id, post) => {
  try {
    const res = await api.put(`/posts/${id}`, post);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const deletePost = async (id) => {
  try {
    const res = await api.delete(`/posts/${id}`);
    return res.data;
  } catch (e) {
    throw e;
  }
}