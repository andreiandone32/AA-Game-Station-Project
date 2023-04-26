import { Route, Routes } from "react-router-dom";

import * as Pages from "../pages";
import { AppLayout } from "../layout/AppLayout";

export default function () {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Pages.Home />} />
        <Route path="/favorite" element={<Pages.Favorite />} />
        <Route path="/gameInfo/:id" element={<Pages.GameInfo />} />
      </Route>
    </Routes>
  );
}
