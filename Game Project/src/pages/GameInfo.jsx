import {
  Box,
  CircularProgress,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useFetchData } from "../hooks/useFetchData";
import { getGameByGenre, getGamesById, getGames } from "../services/games";
import { useContext } from "react";
import { FavoriteContext } from "../favorite/FavoriteContext";

export default function GameInfo() {
  const { addFavorite, favorite } = useContext(FavoriteContext);
  const { id } = useParams();

  const {
    data: games,
    loading,
    error,
  } = useFetchData({
    fetcher: () => getGamesById(id),
  });

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "error.main",
            textAlign: "center",
          }}
        >
          {error.message}
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h3">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <img
              style={{ width: "100%" }}
              src={game.thumbnail}
              alt={game.title}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="h2">{game.title}</Typography>
            <Typography variant="h2">Developed by {game.developer}</Typography>
            <Typography variant="h2">Published by {game.publisher}</Typography>
            <Typography variant="h3">Genre {game.genre}</Typography>
            <Divider sx={{ my: 3 }} />
            <Typography variant="h3">About game</Typography>
            <Typography variant="body1">{game.description}</Typography>
          </Grid>
        </Grid>
      </Typography>
    </Box>
  );
}
