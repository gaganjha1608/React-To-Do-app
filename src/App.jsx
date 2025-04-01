import React from "react";
import { Container, AppBar, Toolbar, Typography } from "@mui/material";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">React To-Do App</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <TaskInput />
        <TaskList />
      </Container>
    </>
  );
}

export default App;
