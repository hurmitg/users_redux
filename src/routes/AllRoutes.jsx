import React from "react";
import { Routes, Route } from "react-router-dom";
import AllUsers from "./AllUsers";
import SingleUser from "./SingleUser";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllUsers />} />
        <Route path="/user/:id" element={<SingleUser />} />
      </Routes>
    </div>
  );
};
export default AllRoutes;
