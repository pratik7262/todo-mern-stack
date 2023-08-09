import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import UserState from "./contexts/userContext/UserState";
import TaskState from "./contexts/taskContext/TaskState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <CssBaseline />
      <UserState>
        <TaskState>
          <App />
        </TaskState>
      </UserState>
    </React.StrictMode>
  </BrowserRouter>
);
