import api from '../api';

export async function retrieveUser(searchValue) {
  try {
    const response = await api.get(`users?name=${searchValue}`);
    return response.data[0];
  } catch (error) {
    console.log(error);
    return {};
  }
}
