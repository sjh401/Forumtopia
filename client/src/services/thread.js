import api from "./apiConfig";

export const getThreadsCategories = async (id) => {
  try {
    const res = await api.get(`/categories/${id}/threads`);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const getThreadsUsers = async (id) => {
  try {
    const res = await api.get(`/categories/${id}/threads/users`);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const getThreads = async () => {
  try {
    const res = await api.get('/threads');
    return res.data;
  } catch (e) {
    throw e;
  }
}

export const createThread = async (id, input) => {
  try {
    const res = await api.post(`/categories/${id}/threads`, input);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const getThread = async (id) => {
  try {
    const res = await api.get(`/threads/${id}`);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const updateThread = async (id, thread) => {
  try {
    const res = await api.put(`/threads/${id}`, thread);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const deleteThread = async (id) => {
  try {
    const res = await api.delete(`/threads/${id}`);
    return res.data;
  } catch (e) {
    throw e;
  }
}