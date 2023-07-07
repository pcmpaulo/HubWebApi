import api from '../api';

export async function listRepositories(userId) {
  try {
    const response = await api.get(`repositories?userId=${userId}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function updateRepository(id, data) {
  try {
    const response = await api.put(`repositories/${id}`, data);
    return response.data;
  } catch (error) {
    console.log(error);
    return {};
  }
}

export async function deleteRepository(id) {
  try {
    const response = await api.delete(`repositories/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return {};
  }
}

export async function createRepository(data) {
  try {
    const response = await api.post('repositories', data);
    return response.data;
  } catch (error) {
    console.log(error);
    return {};
  }
}
