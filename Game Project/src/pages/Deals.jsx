import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getAllDeals } from "../services/deals";

import { GameCard } from "../components/GameCard";

export default function () {


  const {data:deals,isLoading} = useQuery({
    queryFn:()=>getAllDeals,
    queryKey:["all-deals"]
  })

if(isLoading){
  return <CircularProgress />
}



  
  return (
    <Box>
      <Typography variant="h3">All deals</Typography>
      
    </Box>
  );
}
