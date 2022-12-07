import { Box, Toolbar, Typography, Grid, Card } from "@mui/material";
import React from "react";
import ProductTable from "../../Components/Dashboard/Product Table/ProductTable";
import RecentActivity from "../../Components/Dashboard/RecentActivity";
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
        <Grid container spacing={2} sx={{ mt: 5 }}>
          <Grid item xs={12} sm={12} md={8}>
            <Card
              sx={{
                p: 2,
                boxShadow:
                  "0px 0px 2px rgba(145, 158, 171, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)",
              }}
            >
              <ProductTable />
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Card
              sx={{
                p: 2,
                boxShadow:
                  "0px 0px 2px rgba(145, 158, 171, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)",
              }}
            >
              <RecentActivity />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
