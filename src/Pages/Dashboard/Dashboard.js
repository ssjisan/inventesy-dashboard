import { Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import StateCard from "../../Components/Dashboard/StateCard";
import Sidebar from "../../Layout/Sidebar/Sidebar";

export default function Dashboard() {
  const drawerWidth = 280;

  return (
    <Box>
      <Sidebar />
      <Box
        component="main"
        sx={{
          p: 3,
          width: { lg: `calc(100% - ${drawerWidth}px)` },
          ml: { lg: `${drawerWidth}px` },
        }}
      >
        <Toolbar />
        <Typography
          sx={{ mb: 5, fontSize: "24px", fontWeight: 600 }}
          color="text.1000"
        >
          Overview
        </Typography>
        <StateCard sx={{ mb: 5 }} />
      </Box>
    </Box>
  );
}
