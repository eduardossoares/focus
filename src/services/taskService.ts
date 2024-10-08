import axios from 'axios';

const API_URL = 'http://localhost:3001/api/tasks';

// Funções Obtidas da API, porém não utilizadas

export const getTasks = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addTask = async (task: { title: string; completed: boolean; userId: string }) => {
    const response = await axios.post(API_URL, task);
    return response.data;
};

export const updateTask = async (id: string, updatedData: { title: string; completed: boolean }) => {
    const response = await axios.put(`${API_URL}/${id}`, updatedData);
    return response.data;
};

export const deleteTask = async (id: string) => {
    await axios.delete(`${API_URL}/${id}`);
};
