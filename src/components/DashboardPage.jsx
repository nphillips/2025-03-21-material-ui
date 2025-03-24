import React from "react";
import { Box } from "@mui/material";
import RecentTransactions from "./RecentTransactions";

const DashboardPage = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        <RecentTransactions />
      </Box>
    </>
  );
};

export default DashboardPage;
