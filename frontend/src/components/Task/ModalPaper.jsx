import { Button, Paper, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import taskContext from "../../contexts/taskContext/taskContext";

const ModalPaper = ({ label, name, type, value, id, onClose }) => {
  const { updateTask } = useContext(taskContext);
  const [newValue, setNewValue] = useState(value);
  const onChange = (e) => {
    setNewValue(e.target.value);
  };

  const onClick = async (e) => {
    if (newValue === "") {
      toast.warn("Please Fill All Values !!!");
    } else {
      const updatingTask = await updateTask(name, newValue, id, onClose);

      if (updatingTask.success) {
        toast.success(updatingTask.msg);
        onClose();
      } else {
        toast.error(updatingTask.msg);
        onClose();
      }
    }
  };
  return (
    <Paper sx={{ padding: 2 }} elevation={5}>
      <TextField
        label={label}
        // sx={{ width: "30%" }}
        id="newTitle"
        name={name}
        onChange={onChange}
        required
        type={type}
        fullWidth
        value={newValue}
        variant="standard"
      />
      <Button
        type="submit"
        color="primary"
        variant="contained"
        sx={{ margin: "8px 0" }}
        fullWidth
        onClick={onClick}
      >
        Update {name}
      </Button>
      <ToastContainer autoClose={3000} pauseOnHover={false} theme="colored" />
    </Paper>
  );
};

export default ModalPaper;
