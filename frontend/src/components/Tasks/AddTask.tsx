import React, { useState, useEffect } from 'react';
import { TextField, Button, MenuItem, Typography } from '@mui/material';
import { Task } from '../../types/task';
import taskService from '../../services/taskService'

interface AddTaskProps {
  taskToEdit?: Task;
  refreshTasks: () => void;
  clearEditTask: () => void;
}

const AddTask: React.FC<AddTaskProps> = ({ taskToEdit, refreshTasks, clearEditTask }) => {
  const [task, setTask] = useState<Task>({
    title: '',
    description: '',
    priority: 'low',
    due_date: '',
  });

  useEffect(() => {
    if (taskToEdit) {
      setTask(taskToEdit);
    }
  }, [taskToEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (taskToEdit) {
      taskService.updateTask(task).then(() => {
        refreshTasks();
        clearEditTask();
      });
    } else {
      taskService.addTask(task).then(() => {
        refreshTasks();
        setTask({ title: '', description: '', priority: 'low', due_date: '' });
      });
    }
  };

  return (
    <>
      <Typography variant='h3' fontFamily='auto' alignItems='center' textAlign='center' marginBottom='20px' >
        Task Priority App
      </Typography>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px', border: '1 solid' }}>
        <TextField
          label="Title"
          name="title"
          value={task.title}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Description"
          name="description"
          value={task.description}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          select
          label="Priority"
          name="priority"
          value={task.priority}
          onChange={handleChange}
          fullWidth
          margin="normal"
        >
          <MenuItem value="low">Low</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="high">High</MenuItem>
        </TextField>
        <TextField
          label="Due Date"
          name="due_date"
          type="date"
          value={task.due_date}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          required
          fullWidth
          margin="normal"
        />
        <div className='button-wappper'>
          <Button type="submit" variant="outlined" color="primary">
            {taskToEdit ? 'Update Task' : 'Add Task'}
          </Button>
          {taskToEdit && (
            <Button onClick={clearEditTask} color="secondary" variant='outlined'>
              Cancel
            </Button>
          )}
        </div>
      </form>
    </>
  );
};

export default AddTask;
