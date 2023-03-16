import React from "react";
import { Route, Routes } from "react-router-dom";

import Inbox from "./Inbox";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inbox />} />
      </Routes>
    </>
  );
}

export default Router;
