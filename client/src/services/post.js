import api from "./apiConfig"

export const createPost = async (pid, input) => {
  try {
    const res = await api.post(`/threads/${pid}/posts`, input);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const getPosts = async (pid) => {
  try {
    const res = await api.get(`/threads/${pid}/posts`);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const getPost = async (pid) => {
  try {
    const res = await api.get(`/threads/${pid}/post`);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const updatePost = async (pid, post) => {
  try {
    const res = await api.put(`/posts/${pid}`, post);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const deletePost = async (pid) => {
  try {
    const res = await api.delete(`/threads/${pid}/post`);
    return res.data;
  } catch (e) {
    throw e;
  }
}