import React, { useState, useEffect } from 'react';
import { Task } from '../../types/task';
import taskService from '../../services/taskService';
import TaskCard from './TaskCard';

import { Typography, Grid, ThemeProvider, createTheme } from '@mui/material';
import { styled } from '@mui/system';
import { Tabs } from '@mui/base/Tabs';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';
import { TabPanel as BaseTabPanel } from '@mui/base/TabPanel';
import { buttonClasses } from '@mui/base/Button';
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab';

interface TaskListProps {
    refreshTasks: () => void;
    setTaskToEdit: (task: Task) => void;
}

const TaskList: React.FC<TaskListProps> = ({ refreshTasks, setTaskToEdit }) => {
    const [tasks, setTasks] = useState<{ low: Task[]; medium: Task[]; high: Task[] }>({
        low: [],
        medium: [],
        high: [],
    });

    const fetchTasks = () => {
        (['low', 'medium', 'high'] as const).forEach((priority) => {
            taskService.getTasksByPriority(priority).then((response) => {
                setTasks((prev) => ({ ...prev, [priority]: response }));
            });
        });
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const handleDelete = (id: number) => {
        taskService.deleteTask(id).then(() => {
            fetchTasks();
            refreshTasks();
        });
    };

    const handleEdit = (task: Task) => {
        setTaskToEdit(task);
    };

    const renderTaskSection = (title: string, tasks: Task[]) => (
        <>
            <Typography variant="h5" gutterBottom>
                {title}
            </Typography>
            <Grid container spacing={2}>
                {tasks.length > 0 ? (
                    tasks.map((task) => (
                        <Grid item xs={12} sm={6} md={4} key={task.id}>
                            <TaskCard key={task.id} task={task} onEdit={handleEdit} onDelete={handleDelete} />
                        </Grid>
                    ))
                ) : (
                    <Typography variant="body2" gutterBottom color="textSecondary">
                        <div style={{ padding: '16px 0 0 16px' }}>No tasks available.</div>
                    </Typography>
                )}
            </Grid>
        </>

    );

    const darkTheme = createTheme({
        palette: {
            mode: 'light',
        },
    });

    return (
        <div>
            <ThemeProvider theme={darkTheme}>
                <Tabs defaultValue={2}>
                    <TabsList className='tab-wapper'>
                        <Tab value={0}>Low</Tab>
                        <Tab value={1}>Medium</Tab>
                        <Tab value={2}>High</Tab>
                    </TabsList>
                    <TabPanel value={0} color='#f0f4c3' className='tab-panel-wapper'>{renderTaskSection('Low Priority', tasks.low,)}</TabPanel>
                    <TabPanel value={1} color='#ffe082' className='tab-panel-wapper'>{renderTaskSection('Medium Priority', tasks.medium)}</TabPanel>
                    <TabPanel value={2} color='#ef9a9a' className='tab-panel-wapper'>{renderTaskSection('High Priority', tasks.high)}</TabPanel>
                </Tabs>
            </ThemeProvider>
        </div>
    );
};

export default TaskList;


const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};

const Tab = styled(BaseTab)`
    font-family: 'IBM Plex Sans', sans-serif;
    color: #1f1f1f;
    margin: 0;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 600;
    background-color: transparent;
    width: 100%;
    padding: 10px 12px;
    display: flex;
    justify-content: center;
    border: 1px solid #c3c3c3;
    border-radius: 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #c3c3c3;
    border-bottom: 0;
  
    &:hover {
      background-color: #eeeeee;
    }
  
    &:focus {
      color: #1f1f1f;
    }
  
    &.${tabClasses.selected} {
      background-color: #eeeeee;
      color: #1f1f1f;
    }
  
    &.${buttonClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;

const TabPanel = styled(BaseTabPanel)(
    ({ theme, color }) => `
    width: 100%;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    padding: 20px 12px;
    background-color: ${color ? color : (theme.palette.mode === 'dark' ? grey[900] : '#fff')};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    opacity: 1;
    `,
);

const TabsList = styled(BaseTabsList)(
    ({ theme }) => `
    min-width: 400px;
    background-color: #eeeeee;
    border-radius: 12px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: space-between;
    box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
    `,
);