import { useState, useEffect } from 'react';
import { Task } from '../types/task'
import taskService from '../services/taskService'

const useFetchTasks = () => {
  const [tasks, setTasks] = useState<{ low: Task[]; medium: Task[]; high: Task[] }>({
    low: [],
    medium: [],
    high: [],
  });

  const fetchTasks = async () => {
    const low = await taskService.getTasksByPriority('low');
    const medium = await taskService.getTasksByPriority('medium');
    const high = await taskService.getTasksByPriority('high');
    setTasks({ low, medium, high });
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return { tasks, fetchTasks };
};

export default useFetchTasks;
