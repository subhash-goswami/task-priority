import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { Task } from '../../types/task';

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: number) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onEdit, onDelete }) => {
  return (
    <Card style={{ marginBottom: '10px' }}>
      <CardContent>
        <Typography variant="h5">{task.title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {task.description}
        </Typography>
        <Typography variant="caption">Due: {task.due_date}</Typography>
        <div>
          <Button onClick={() => onEdit(task)} color="primary">
            Edit
          </Button>
          <Button onClick={() => onDelete(task.id!)} color="secondary">
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
