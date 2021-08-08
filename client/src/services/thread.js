import api from "./apiConfig";

export const getThreads = async (id) => {
  try {
    const res = await api.get(`/topics/${id}/threads`);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const getGeneralThreads = async () => {
  try {
    const res = await api.get(`/threads`);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const createThread = async (id, input) => {
  try {
    const res = await api.post(`/topics/${id}/threads`, input);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const getThread = async (id) => {
  try {
    const res = await api.get(`/topics/${id}/thread`);
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