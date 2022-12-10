import {  Box,  Table, TableContainer } from "@mui/material";
import { React, useState } from "react";
import productData from "../../../Assets/FakeData/TopSelling.json";
import Body from "./Body";
import Header from "./Header";

export default function ProductTable() {
  // eslint-disable-next-line
  const [product, setProduct] = useState(productData);
  return (
    <Box>
      <TableContainer sx={{ mt: 3 }}>
        <Table>
          <Header />
          <Body product={product} />
        </Table>
      </TableContainer>
    </Box>
  );
}
