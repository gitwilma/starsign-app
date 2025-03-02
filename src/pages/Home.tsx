import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Box sx={{ textAlign: "center", p: 3 }}>
      <Typography variant="h2" sx={{ color: "primary.main", mb: 2 }}>
        Välkommen till Horoskop-appen
      </Typography>
      <Typography>Välj ditt stjärntecken och få dagens horoskop!</Typography>
      <Button
        component={Link}
        to="/horoscope"
        variant="contained"
        sx={{ mt: 3 }}
      >
        Gå till Horoskop
      </Button>
    </Box>
  );
}
