import api from "./apiConfig";

export const getTopics = async () => {
  try {
    const res = await api.get("/topics");
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const createTopic = async (input) => {
  try {
    const res = await api.post("/topics", input);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const getTopic = async (id) => {
  try {
    const res = await api.get(`/topics/${id}`);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const updateTopic = async (id, thread) => {
  try {
    const res = await api.put(`/topics/${id}`, thread);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const deleteTopic = async (id) => {
  try {
    const res = await api.delete(`/topics/${id}`);
    return res.data;
  } catch (e) {
    throw e;
  }
}