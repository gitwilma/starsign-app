import { Box, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchHoroscope } from "../Api";

export default function Horoscope() {
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
    <Box sx={{ p: 3 }}>
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
  );
}
