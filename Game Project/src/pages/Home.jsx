import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { getGames } from "../services/games";
import { GameCard } from "../components/GameCard";
import { useFetchData } from "../hooks/useFetchData";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function () {
  const {
    data: games,
    loading,
    error,
  } = useFetchData({
    fetcher: getGames,
    initialData: [],
  });

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <Box>
        <Typography textAlign="center"  sx={{ color:"white", mt:18, fontSize:"5rem"}} variant="body1">Something went wrong</Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Typography
        sx={{
          fontFamily: "Roboto",
          fontWeight: 500,
          textAlign: "center",
          fontSize: "3rem",
          mt: 8,
          color: "white",
        }}
        variant="h2"
      >
        Welcome
      </Typography>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          fontSize: "1.5rem",
          color: "white",
        }}
        variant="h6"
      >
        There are the best games for you
      </Typography>
      <Grid sx={{ mt: 3 }} container spacing={2}>
        {games.map((game) => (
          <Grid key={game.id} item xs={12} sm={6} lg={3}>
            <GameCard game={game} />
          </Grid>
        ))}
      </Grid>
      <Stack spacing={2}>
        <Pagination
          count={10}
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        />
      </Stack>
    </Box>
  );
}
