import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { FavoriteContext } from "../favorite/FavoriteContext";

export function GameCard({ game }) {
  const { addProduct, removeProduct } = useContext(FavoriteContext);


 
  return (
    <Card
      key={game.id}
      sx={{ backgroundColor: "transparent", textAlign: "center" }}
    >
      <Link to={`/gameInfo/${game.id}`}>
        <CardMedia component="img" image={game.thumbnail} title={game.title} />
        <CardContent>
          <Typography
            sx={{ color: "white", textAlign: "center" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {game.title}
          </Typography>
          <Typography
            sx={{ color: "white" }}
            variant="body2"
            color="text.secondary"
          >
            {game.publisher}
          </Typography>
          <Typography
            sx={{ color: "white" }}
            variant="body2"
            color="text.secondary"
          >
            {game.genre}
          </Typography>
        </CardContent>
      </Link>
      <CardActions>
        <Button
          LinkComponent={NavLink}
          to={`/gameInfo/${game.id}`}
          sx={{ color: "white" }}
          fullWidth
          variant="outlined"
          size="small"
        >
          Learn More
        </Button>
        <Button
          onClick={(e) => {
            e.preventDefault();
            addProduct(game);
          }}
          sx={{ color: "white" }}
          fullWidth
          variant="outlined"
          size="small"
        >
          Favorite
        </Button>
      </CardActions>
    </Card>
  );
}
