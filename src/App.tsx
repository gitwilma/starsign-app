import { Box } from "@mui/material";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BottomNav from "./components/Navbar";
import Home from "./pages/Home";
import Horoscope from "./pages/horoscope";

export default function App() {
  return (
    <Router>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            overflowY: "auto",
            pb: "64px",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/horoscope" element={<Horoscope />} />
          </Routes>
        </Box>
        <BottomNav />
      </Box>
    </Router>
  );
}
