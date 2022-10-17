import React from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {

  return (
    <>
      Dashboard Layout
      <Outlet />
    </>
  );
};

export default DashboardLayout;
