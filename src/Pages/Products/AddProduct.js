import React from "react";
import { Box, Container, Grid, Toolbar, Typography } from "@mui/material";
import Sidebar from "../../Layout/Sidebar/Sidebar";
import ProductInfo from "../../Components/Products/Add Product/ProductInfo";
import ProductBrand from "../../Components/Products/Add Product/ProductBrand";
const drawerWidth = 280;

export default function AddProduct() {
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
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ fontSize: "24px", fontWeight: 600 }}
              color="text.1000"
            >
              Create a new product
            </Typography>
          </Box>
          <Box sx={{ pt: 2 }}>
            <Grid container spacing={4}>
              <Grid item md={8}>
                <ProductInfo />
              </Grid>
              <Grid item md={4}></Grid>
              <Grid item md={8}>
                <ProductBrand />
              </Grid>
              <Grid item md={4}></Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
