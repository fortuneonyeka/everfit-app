import {Routes, Route} from "react-router-dom";
import { Box } from "@mui/material";
import './App.css';

function App() {
  return (
    <Box width="400px">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/exercise/:id" element={<ExerciseDetail/>}/>
      </Routes>
      
    </Box>
  );
}

export default App;
