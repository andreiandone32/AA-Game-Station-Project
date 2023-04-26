import { CssBaseline } from "@mui/material";
import "./App.css";
import Routes from "./routes";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FavoriteContextProvider } from "./favorite/FavoriteContextProvider";

const queryClient = new QueryClient();

function App() {
  return (
    <FavoriteContextProvider>
      <QueryClientProvider client={queryClient}>
        <Routes />
        <CssBaseline />
      </QueryClientProvider>
    </FavoriteContextProvider>
  );
}

export default App;
