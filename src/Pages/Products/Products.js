import { Box, Toolbar, Typography, Button } from "@mui/material";
import React from "react";
import StateCard from "../../Components/Products/StateCard";
import Sidebar from "../../Layout/Sidebar/Sidebar";
import ProductCard from "../../Components/Products/ProductCard";
import product from "../../Assets/FakeData/product.json";

export default function Products() {
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{fontSize: "24px", fontWeight: 600 }}
            color="text.1000"
          >
            Produts
          </Typography>
          <Button>Add Product</Button>
        </Box>
        <StateCard/>
        <Box sx={{padding:"16px"}}>
          {/* Grid view list view button */}
        </Box>
        <ProductCard product={product} />
      </Box>
    </Box>
  );
}
