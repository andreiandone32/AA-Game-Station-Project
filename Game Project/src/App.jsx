import { CssBaseline } from "@mui/material";
import "./App.css";
import Routes from "./routes";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartContextProvider } from "./contexts/cart/CartContextProvider";

const queryClient = new QueryClient();

function App() {
  return (
    <CartContextProvider>
      <QueryClientProvider client={queryClient}>
        <Routes />
        <CssBaseline />
      </QueryClientProvider>
    </CartContextProvider>
  );
}

export default App;
