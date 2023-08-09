import {
  DeleteOutline,
  Grade,
  LibraryAddCheckOutlined,
} from "@mui/icons-material";
import { IconButton, Paper, Stack, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import DescriptionStack from "./DescriptionStack";
import DueDateStack from "./DueDateStack";
import TitleStack from "./TitleStack";

const Task = ({ title, date, desc, dueDate, id, st, pr }) => {
  const [priority, setPriority] = useState(pr);
  const [status, setStatus] = useState(st);

  const deleteTask = async () => {
    const response = await fetch(
      `http://localhost:5000/api/todo/deletetodo/${id}`,
      {
        method: "DELETE",
      }
    );

    const json = await response.json();
    if (json.success) {
      toast.success(json.message);
    } else {
      toast.error(json.message);
    }
  };

  const changeStatus = async () => {
    const response = await fetch(
      `http://localhost:5000/api/todo/changestatus/${id}`,
      {
        method: "GET",
      }
    );

    const json = await response.json();

    setStatus(!json.status);
    if (!json.success) {
      toast.error(json.message);
    }
  };

  const changePriority = async () => {
    const response = await fetch(
      `http://localhost:5000/api/todo/changepriority/${id}`,
      {
        method: "GET",
      }
    );

    const json = await response.json();

    setPriority(!json.imp);
    if (!json.success) {
      toast.error(json.message);
    }
  };

  useEffect(() => {}, [status, priority]);

  return (
    <Paper
      elevation={6}
      sx={{ p: 2, border: priority ? "1.5px solid orange" : "" }}
    >
      <Stack spacing={2}>
        <TitleStack title={title} id={id} />
        <DescriptionStack desc={desc} id={id} />
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <DueDateStack dueDate={dueDate} id={id} />
          <Stack direction="row-reverse" spacing={2} mr={2}>
            <Tooltip title="Delete Task">
              <IconButton onClick={deleteTask}>
                <DeleteOutline sx={{ cursor: "pointer", color: "gray" }} />
              </IconButton>
            </Tooltip>
            <Tooltip title={status ? "Mark As Pending" : "Mark As Completed"}>
              <IconButton onClick={changeStatus}>
                <LibraryAddCheckOutlined
                  sx={{
                    cursor: "pointer",
                    color: status ? "success.main" : "gray",
                  }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip
              title={priority ? "Mark As Not Important" : "Mark As Important"}
            >
              <IconButton onClick={changePriority}>
                <Grade
                  sx={{
                    cursor: "pointer",
                    color: priority ? "warning.main" : "gray",
                  }}
                />
              </IconButton>
            </Tooltip>
          </Stack>
        </Stack>
      </Stack>
      <ToastContainer autoClose={3000} pauseOnHover={false} theme="colored" />
    </Paper>
  );
};

export default Task;
