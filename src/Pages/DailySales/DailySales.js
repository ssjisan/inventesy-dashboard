import { Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import Sidebar from "../../Layout/Sidebar/Sidebar";

export default function DailySales() {
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
        <Typography variant="h4" sx={{ mb: 5 }} color="text.1000">
          Hi, Welcome back
        </Typography>
      </Box>
    </Box>
  );
}
