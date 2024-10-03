import axios from 'axios';
import { Task } from '../types/task';

// Use the environment variable for the API URL
const API_URL = process.env.REACT_APP_API;

const getTasksByPriority = (priority: 'low' | 'medium' | 'high'): Promise<Task[]> => {
  return axios.get<Task[]>(`${API_URL}/tasks?priority=${priority}`).then((response) => response.data);
};

const addTask = (task: Task): Promise<void> => {
  return axios.post(`${API_URL}/task/`, task);
};

const deleteTask = (id: number): Promise<void> => {
  return axios.delete(`${API_URL}/task/${id}/`);
};

const updateTask = (task: Task): Promise<void> => {
  return axios.put(`${API_URL}/task/${task.id}/`, task);
};

const taskService = {
  getTasksByPriority,
  addTask,
  deleteTask,
  updateTask,
};

export default taskService;
