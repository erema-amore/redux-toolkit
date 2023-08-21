import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { removeTask } from '../taskSlice'

function TaskList() {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);

  const handleDelete = taskId => {
    dispatch(removeTask(taskId));
  };

  return (
    <List>
      {tasks.map(task => (
        <ListItem key={task.id}>
          <ListItemIcon>
            <IconButton onClick={() => handleDelete(task.id)}>
              <Delete />
            </IconButton>
          </ListItemIcon>
          <ListItemText primary={task.title} />
        </ListItem>
      ))}
    </List>
  );
}

export default TaskList;
