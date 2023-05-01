import { Route, Routes } from "react-router-dom";

import * as Pages from "../pages";
import { AppLayout } from "../layout/AppLayout";

export default function () {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Pages.Home />} />
        <Route path="/cart" element={<Pages.Cart />} />
      </Route>
    </Routes>
  );
}
