import React, { useContext, useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,   
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link, useNavigate } from "react-router-dom";
import userContext from "../../contexts/userContext/userContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  let navigate = useNavigate();
  let { login } = useContext(userContext);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const onSubmit = async (e) => {
    e.preventDefault();
    let logging = await login(credentials.email, credentials.password);
    console.log(logging);
    if (logging.success) {
      if (logging.verified) {
        toast.success(logging.msg);
        setTimeout(() => {
          navigate("/");
          window.location.reload();
        }, 3500);

      }else{
        toast.warn(logging.msg);
        setTimeout(() => {
          window.location.reload();
        }, 2600);
      }
    } else {
      toast.error(logging.msg);
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const paperStyle = {
    padding: 20,
    height: "50vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "primary.main" };
  const btnstyle = { margin: "8px 0" };
  return (
    <Grid mt={4}>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar sx={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <form onSubmit={onSubmit}>
          <TextField
            label="Email"
            placeholder="Enter Email"
            fullWidth
            required
            sx={{ my: 1 }}
            name="email"
            value={credentials.email}
            onChange={onChange}
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
            sx={{ my: 1 }}
            name="password"
            value={credentials.password}
            onChange={onChange}
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
          >
            Sign in
          </Button>
        </form>
        <Typography>
          Do not have an account? <Link to="/signup">Sign Up</Link>
        </Typography>
      </Paper>
      <ToastContainer autoClose={1500} pauseOnHover={false} theme="colored" />
    </Grid>
  );
};

export default Login;
