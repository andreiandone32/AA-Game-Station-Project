import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";

import { useQuery } from "@tanstack/react-query";
import { getDeals } from "../services/deals";
import { useState } from "react";
import { useFetchData } from "../hooks/useFetchData";
import { NavLink } from "react-router-dom";
import { GameCard } from "../components/GameCard";

export default function () {
  const {
    data: deals,
    loading,
    error,
  } = useFetchData({
    fetcher: getDeals,
    initialData: [],
  });

  console.log(deals);

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
      <Typography variant="h3" textAlign="center" color="white" my={4}>Welcome</Typography>
      <Grid container spacing={2}>
        {deals.map((deal) => (
          <Grid key={deal.dealID} item xs={12} sm={6} md={3}>
            <GameCard deal={deal} />
          </Grid>
        ))}
        {/* <Grid item xs={6}>
            <BookCard />
          </Grid>
          <Grid item xs={6}>
            <BookCard />
          </Grid> */}
      </Grid>
    </Box>
  );
}
