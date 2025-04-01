import React from "react";
import { List, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "../store/taskSlice";

function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task, index) => (
        <ListItem
          key={index}
          secondaryAction={
            <IconButton edge="end" color="error" onClick={() => dispatch(removeTask(index))}>
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemText primary={task} />
        </ListItem>
      ))}
    </List>
  );
}

export default TaskList;
