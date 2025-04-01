import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTask } from "../store/taskSlice";

function TaskInput() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask(task));
      setTask("");
    }
  };

  return (
    <>
      <TextField
        label="New Task"
        variant="outlined"
        fullWidth
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleAddTask} sx={{ mt: 2 }}>
        Add Task
      </Button>
    </>
  );
}

export default TaskInput;
