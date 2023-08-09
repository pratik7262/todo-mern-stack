import { Box, Stack } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Task from "../Task";
import TaskContext from "../../contexts/taskContext/taskContext";
import { toast } from "react-toastify";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const { getTasks } = useContext(TaskContext);
  useEffect(() => {
    getTasks().then((data) => {
      if (data.success) {
        setTasks(data.tasks);
      } else {
        toast.error(data.msg);
      }
    });
  });

  return (
    <Stack spacing={2} sx={{ p: 2, mt: 4 }}>
      {tasks.map((task) => {
        return (
          <>
            <Box key={task._id}>
              <Task
                id={task._id}
                st={task.status}
                pr={task.imp}
                title={task.title}
                desc={task.description}
                date={task.createdDate}
                dueDate={task.dueDate}
              />
            </Box>
          </>
        );
      })}
    </Stack>
  );
};

export default Tasks;
