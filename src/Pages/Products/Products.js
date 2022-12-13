import { Box, Toolbar, Typography, Button, ButtonGroup } from "@mui/material";
import React, { useState } from "react";
import StateCard from "../../Components/Products/StateCard";
import Sidebar from "../../Layout/Sidebar/Sidebar";
import ProductCard from "../../Components/Products/ProductCard";
import product from "../../Assets/FakeData/product.json";
import ProductTable from "../../Components/Products/Product Table/ProductTable";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GridViewIcon from "@mui/icons-material/GridView";
import { Link } from "react-router-dom";
export default function Products() {
  const drawerWidth = 280;
  const [view, setView] = useState("list");
  const handleClick = (e) => {
    setView(e);
  };
  const linkStyle = {
    textDecoration: "none",
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
          <Link to="/addProduct" style={linkStyle}>
            <Button
              variant="containedPrimary"
            >
              Add Product
            </Button>
          </Link>
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
            sx={{ display: "flex", gap: 2 }}
          >
            <Box
              onClick={() => handleClick("list")}
              sx={{
                height: "32px",
                padding: "4px 8px",
                backgroundColor: view === "list" && "#E8EAEC",
                borderRadius: "4px",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                cursor: "pointer",
                gap: 1,
              }}
            >
              <FormatListBulletedIcon sx={{ color: "#254E75" }} />{" "}
              <Typography sx={{ fontWeight: 600, fontSize: "14px" }}>
                List
              </Typography>
            </Box>
            <Box
              onClick={() => handleClick("grid")}
              sx={{
                height: "32px",
                padding: "4px 8px",
                backgroundColor: view === "grid" && "#E8EAEC",
                borderRadius: "4px",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                cursor: "pointer",
                gap: 1,
              }}
            >
              <GridViewIcon sx={{ color: "#254E75" }} />{" "}
              <Typography sx={{ fontWeight: 600, fontSize: "14px" }}>
                Grid
              </Typography>
            </Box>
          </ButtonGroup>
        </Box>
        {view === "list" ? <ProductTable /> : <ProductCard product={product} />}
      </Box>
    </Box>
  );
}
