import { Box, Toolbar, Typography, Button, ButtonGroup } from "@mui/material";
import React, { useState } from "react";
import StateCard from "../../Components/Products/StateCard";
import Sidebar from "../../Layout/Sidebar/Sidebar";
import ProductCard from "../../Components/Products/ProductCard";
import product from "../../Assets/FakeData/product.json";
import ProductTable from "../../Components/Products/Product Table/ProductTable";

export default function Products() {
  const drawerWidth = 280;
  const [view, setView] = useState("list");
  const handleClick = (e) => {
    setView(e);
  };
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
            sx={{ fontSize: "24px", fontWeight: 600 }}
            color="text.1000"
          >
            Produts
          </Typography>
          <Button>Add Product</Button>
        </Box>
        <StateCard />
        <Box sx={{ padding: "16px" }}>{/* Grid view list view button */}</Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontSize: "16px", fontWeight: 700 }}
            color="text.1000"
          >
            All Products
          </Typography>

          <ButtonGroup
            variant="outlined"
            aria-label="outlined primary button group"
          >
            <Button
              onClick={() => handleClick("list")}
              sx={{
                backgroundColor: view === "list" && "text.200",
                color: "text.900",
                textTransform: "none",
                fontWeight: view === "list" ? 700 : 500,
              }}
            >
              List
            </Button>
            <Button
              onClick={() => handleClick("grid")}
              sx={{
                backgroundColor: view === "grid" && "text.200",
                color: "text.900",
                textTransform: "none",
                fontWeight: view === "grid" ? 700 : 500,
              }}
            >
              Grid
            </Button>
          </ButtonGroup>
        </Box>
        {view === "list" ? <ProductTable /> : <ProductCard product={product} />}
      </Box>
    </Box>
  );
}
