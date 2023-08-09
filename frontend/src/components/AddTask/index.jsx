import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import taskContext from "../../contexts/taskContext/taskContext";

const AddTask = () => {
  const { createTask } = useContext(taskContext);
  const dateObj = new Date();
  const month =
    dateObj.getMonth() < 10
      ? `0${dateObj.getMonth() + 1}`
      : dateObj.getMonth() + 1;
  const currDate = `${dateObj.getFullYear()}-${month}-${dateObj.getDate()}`;
  const [info, setInfo] = useState({
    title: "",
    description: "",
    dueDate: currDate,
  });

  const onChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const onClick = async (e) => {
    if (info.description === "" || info.dueDate === "" || info.title === "") {
      toast.warn("Please Fill All Values !!!");
    } else {
      const creatingTask = await createTask(
        info.title,
        info.description,
        info.dueDate
      );

      if (creatingTask.success) {
        toast.success(creatingTask.msg);
        setInfo({ title: "", description: "", dueDate: currDate });
      } else {
        toast.error(creatingTask.msg);
      }
    }
  };
  return (
    <>
      <Paper sx={{ mt: 6, height: "350px", width: "100%" }} elevation={4}>
        <Stack
          spacing={2}
          direction={"column"}
          sx={{
            // width: "100%",
            height: "250px",
            mt: 2.5,
            p: 2,
          }}
        >
          <Typography variant="h6">Add Task</Typography>
          <Stack
            spacing={2}
            mt={2}
            //   sx={{
            //     display: "flex",
            //     alignItems: "center",
            //     justifyContent: "center",
            //   }}
          >
            <TextField
              label="Title"
              // sx={{ width: "30%" }}
              id="title"
              name="title"
              required
              onChange={onChange}
              value={info.title}
              variant="standard"
            />
            <TextField
              // sx={{ width: "35%" }}
              label="Description"
              id="description"
              onChange={onChange}
              value={info.description}
              name="description"
              required
              variant="standard"
            />
            <Box sx={{ width: "1000px" }}>
              <TextField
                sx={{ display: "block", mt: 2 }}
                name="dueDate"
                id="dueDate"
                label="Due Date"
                type={"date"}
                required
                value={info.dueDate}
                variant="standard"
                onChange={onChange}
              />
            </Box>
          </Stack>
          <Stack direction="row-reverse" spacing={2}>
            <Button onClick={onClick} variant="contained" color="primary">
              Add Task
            </Button>
          </Stack>
        </Stack>
      </Paper>
      <ToastContainer autoClose={3000} pauseOnHover={false} theme="colored" />
    </>
  );
};

export default AddTask;
