import { Container, Stack } from "@mui/material";
import Tasks from "./components/Tasks";
import Navbar from "./components/Navbar";
import AddTask from "./components/AddTask";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/SignUp";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Stack>
          <Routes>
            <Route path="/" element={<AddTask />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup/>}/>
          </Routes>
        </Stack>
      </Container>
    </>
  );
}

export default App;
