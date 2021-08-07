import api from "./apiConfig";

export const getCategories = async () => {
  try {
    const res = await api.get("/categories");
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const createCategory = async (input) => {
  try {
    const res = await api.post("/categories", input);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const getCategory = async (id) => {
  try {
    const res = await api.get(`/categories/${id}`);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const updateCategory = async (id, thread) => {
  try {
    const res = await api.put(`/categories/${id}`, thread);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const deleteCategory = async (id) => {
  try {
    const res = await api.delete(`/categories/${id}`);
    return res.data;
  } catch (e) {
    throw e;
  }
}