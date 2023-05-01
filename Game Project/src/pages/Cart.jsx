import { Box, Button, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../contexts/cart/CartContext";

export default function () {
  const { cart, removeProduct } = useContext(CartContext);
  console.log({ cart });

  return (
    <Box sx={{ width: "100%" }}>
      <Typography color="white" textAlign="center" variant="h3">
        Your Shopping Cart
      </Typography>
      {cart.length !== 0 ? (
        cart.map((deal) => {
          const totalPrice = deal.quantity * +deal.salePrice;
          return (
            <Box key={deal.dealID} sx={{ my: 2 }}>
              <Stack
                sx={{ mb: 2 }}
                direction="row"
                justifyContent="space-between"
                alignContent="center"
              >
                <img src={deal.thumb} alt={deal.title} />
                <Typography color="white" variant="h6">
                  {deal.title}
                </Typography>
                <Typography color="white" variant="h6">
                  {deal.quantity} x {deal.salePrice}$ = {totalPrice}$
                </Typography>
              </Stack>
              <Button
                onClick={() => {
                  removeProduct(deal);
                }}
                color="error"
                variant="contained"
              >
                Remove
              </Button>
            </Box>
          );
        })
      ) : (
        <Typography
          sx={{
            color: "white",
            fontFamily: "Montserrat",
            fontWeight: "bold",
            display: "grid",
            placeItems: "center",
            mt: 15,
          }}
          variant="h5"
        >
          Your Cart is empty
        </Typography>
      )}
      {}
    </Box>
  );
}
