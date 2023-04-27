import {
  Box,
  CircularProgress,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { getGames } from "../services/games";
import { getGameByGenre } from "../services/games";
import { GameCard } from "../components/GameCard";
import { useFetchData } from "../hooks/useFetchData";
import { useState, useMemo, useEffect } from "react";
import gameGenreOptions from "../services/gameGenreOptions.json";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function () {

  const {
    data: games,
    loading,
    error,
  } = useFetchData({
    fetcher: getGames,
    initialData: [],
  });

  const [genre, setGenre] = useLocalStorage("genre", "allGenre");

  const data = useMemo(() => {
    return getGameByGenre(games);
  });

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <Box>
        <Typography
          textAlign="center"
          sx={{ color: "white", mt: 18, fontSize: "5rem" }}
          variant="body1"
        >
          Something went wrong
        </Typography>
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
      <FormControl sx={{ width: 150 }}>
        <Select
          labelId="multiple-select-label"
          id="multiple-select"
          value={genre}
          onChange={(event) => setGenre(event.target.value)}
        >
          {gameGenreOptions.map((option, i) => {
            return (
              <MenuItem value={option.value} key={i}>
                {option.label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      <Grid sx={{ mt: 3 }} container spacing={2}>
        {games.map((game) => (
          <Grid key={game.id} item xs={12} sm={6} lg={3}>
            <GameCard game={game} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
