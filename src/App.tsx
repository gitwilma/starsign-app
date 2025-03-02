import { Box, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchHoroscope } from "./Api";
import BottomNav from "./components/Navbar";

export default function App() {
  const [sign, setSign] = useState("aries");
  const [horoscope, setHoroscope] = useState<string | null>(null);

  useEffect(() => {
    async function getHoroscope() {
      const data = await fetchHoroscope(sign);
      if (data) {
        setHoroscope(data.horoscope);
      }
    }
    getHoroscope();
  }, [sign]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        pb: "64px",
        overflow: "hidden",
      }}
    >
      {/* HEADER */}
      <Box
        component="header"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
        }}
      >
        <Typography variant="h1">Horoskop</Typography>
      </Box>

      {/* MAIN CONTENT */}
      <Box component="main" sx={{ flexGrow: 1, overflowY: "auto", px: 2 }}>
        <TextField
          label="Stjärntecken"
          variant="outlined"
          fullWidth
          value={sign}
          onChange={(e) => setSign(e.target.value.toLowerCase())}
          sx={{ mb: 2 }}
        />
        <Typography variant="h2" sx={{ color: "primary.main" }}>
          {sign.charAt(0).toUpperCase() + sign.slice(1)}
        </Typography>
        <Typography>{horoscope || "Laddar..."}</Typography>
      </Box>

      {/* FIXAD NAVBAR */}
      <BottomNav />
    </Box>
  );
}
