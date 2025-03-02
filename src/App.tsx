import { Menu } from "@mui/icons-material";
import { Box, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchHoroscope } from "./Api";
import BottomNav from "./components/Navbar";

export default function App() {
  const [sign, setSign] = useState("aries"); // Standardstjärntecken
  const [horoscope, setHoroscope] = useState<string | null>(null);

  useEffect(() => {
    async function getHoroscope() {
      const data = await fetchHoroscope(sign);
      if (data) {
        setHoroscope(data.horoscope);
      }
    }
    getHoroscope();
  }, [sign]); // Körs varje gång 'sign' ändras

  return (
    <Box sx={{ pb: 8 }}>
      {" "}
      {/* Skapar utrymme för navbaren längst ned */}
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
        <Menu />
      </Box>
      {/* MAIN CONTENT */}
      <Box component="main" sx={{ mt: 4, px: 2 }}>
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
      {/* BOTTOM NAVIGATION */}
      <BottomNav />
    </Box>
  );
}
