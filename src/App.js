import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';


import { AppBar, Toolbar, Typography, Container, Button } from '@mui/material';
import { Home, Add } from '@mui/icons-material';
import { Provider } from 'react-redux';
import store from './store';
import TaskList from './components/TaskList';
import AddTask from './components/AddTasl';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Task Manager
            </Typography>
            <Button component={Link} to="/" color="inherit">
              <Home />
              Home
            </Button>
            <Button component={Link} to="/add" color="inherit">
              <Add />
              Add Task
            </Button>
          </Toolbar>
        </AppBar>
        <Container style={{ marginTop: '20px' }}>
          <Switch>
            <Route path="/add">
              <AddTask />
            </Route>
            <Route path="/">
              <TaskList />
            </Route>
          </Switch>
        </Container>
      </Router>
    </Provider>
  );
}

export default App;
