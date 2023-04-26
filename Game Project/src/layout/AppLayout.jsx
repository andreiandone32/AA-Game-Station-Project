import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function AppLayout() {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      className="background"
    >
      <Header />
      <Container sx={{ flexGrow: 1 , py:2 }} maxWidth="lg">
        <Outlet />
      </Container>
    </Box>
  );
}
