import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { FavoriteContext } from "../favorite/FavoriteContext";
import DeleteIcon from "@mui/icons-material/Delete";

export default function () {
  const { removeProduct, favorite } = useContext(FavoriteContext);

  // let iconStoredGame = favorite.find(item=>item.id === game.id);
  // const favoriteIconList = iconStoredMovie ? true : false;

  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        sx={{
          my: 5,
          color: "white",
        }}
        variant="h3"
        textAlign="center"
      >
        Your Favorite Games
      </Typography>
      {favorite.map((game) => (
        <Box key={game.id}>
          <Card
            sx={{
              maxWidth: 400,
              maxHeight: 400,
              backgroundColor: "transparent",
            }}
          >
            <CardMedia
              component="img"
              image={game.thumbnail}
              title={game.title}
            />
            <CardContent>
              <Typography
                sx={{ color: "white" }}
                textAlign="center"
                gutterBottom
                variant="h5"
                component="div"
              >
                {game.title}
              </Typography>
              <Typography
                sx={{ color: "white" }}
                textAlign="center"
                variant="body2"
                color="text.secondary"
              >
                {game.publisher}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={() => {
                  removeProduct(game);
                }}
                sx={{ color: "white", my: 2 }}
                fullWidth
                size="small"
              >
                <DeleteIcon />
              </Button>
            </CardActions>
          </Card>
        </Box>
      ))}
    </Box>
  );
}
