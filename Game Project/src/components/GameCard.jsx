import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/cart/CartContext";

export function GameCard({ deal }) {
  const { addProduct } = useContext(CartContext);

  return (
    <Card
      key={deal.dealId}
      sx={{ backgroundColor: "transparent", textAlign: "center" }}
    >
      <CardMedia component="img" image={deal.thumb} title={deal.title} />
      <CardContent>
        <Typography
          sx={{ color: "white", textAlign: "center" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {deal.title}
        </Typography>
        <Typography
          sx={{ color: "white" }}
          variant="body2"
          color="text.secondary"
        >
          Deal rating is {deal.dealRating}
        </Typography>
        <Typography
          sx={{ color: "white" }}
          variant="body2"
          color="text.secondary"
        >
          {deal.steamRatingText}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => {
            addProduct(deal);
          }}
          sx={{ color: "white" }}
          fullWidth
          variant="outlined"
          size="small"
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
