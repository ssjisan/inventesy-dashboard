import React from "react";
import { Box, Button, Container, Grid, Toolbar, Typography } from "@mui/material";
import Sidebar from "../../Layout/Sidebar/Sidebar";
import ProductInfo from "../../Components/Products/Add Product/ProductInfo";
import ProductBrand from "../../Components/Products/Add Product/ProductBrand";
import ProductPrice from "../../Components/Products/Add Product/ProductPrice";
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
              Add Product
            </Typography>
          </Box>
          <Box sx={{ pt: 2 }}>
            <Grid container spacing={4}>
              <Grid
                item
                md={8}
                sx={{ display: "flex", flexDirection: "column", gap: 4 }}
              >
                <ProductInfo />
                <ProductPrice />
              </Grid>
              <Grid item md={4}>
                <ProductBrand />
              </Grid>
            </Grid>
          </Box>
          <Box sx={{mt:2, display:"flex", gap:2}}>
          <Button variant="outlined">Cancel</Button>
          <Button variant="contained">Save</Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
