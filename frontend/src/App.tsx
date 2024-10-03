import React, { useState } from 'react';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import AddTask from './components/Tasks/AddTask';
import TaskList from './components/Tasks/TaskList';
import theme from './theme/theme';
import { Task } from './types/task';

const App: React.FC = () => {
  const [taskToEdit, setTaskToEdit] = useState<Task | undefined>(undefined);

  // Function to refresh tasks (can be passed to AddTask and TaskList)
  const fetchTasks = () => {
    window.location.reload(); // Placeholder, implement a more efficient refresh in the future
  };

  const clearEditTask = () => {
    setTaskToEdit(undefined); // Clear the selected task to edit
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container className='main-container'>
        <AddTask taskToEdit={taskToEdit} refreshTasks={fetchTasks} clearEditTask={clearEditTask} />
        <TaskList refreshTasks={fetchTasks} setTaskToEdit={setTaskToEdit} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
