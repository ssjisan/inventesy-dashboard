import { Typography, Box, Button, Table, TableContainer } from "@mui/material";
import { React, useState } from "react";
import TableContant from "./TableContant";
import TableHeader from "./TableHeader";
import productData from "../../../Assets/FakeData/TopSelling.json";
import Pagination from "./Pagination";

export default function ProductTable() {
  // eslint-disable-next-line
  const [product, setProduct] = useState(productData);
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ fontSize: "18px", fontWeight: 700 }}
          color="text.1000"
        >
          Top Selling Products
        </Typography>
        <Button>View All</Button>
      </Box>
      <TableContainer sx={{ mt: 3 }}>
        <Table>
          <TableHeader />
          <TableContant product={product} />
        </Table>
          <Pagination product={product} />
      </TableContainer>
    </Box>
  );
}
