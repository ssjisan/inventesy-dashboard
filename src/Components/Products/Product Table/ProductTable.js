import { Box, Table, TableContainer } from "@mui/material";
import { React, useState } from "react";
import productData from "../../../Assets/FakeData/TopSelling.json";
import ProductSort from "../ProductSort";
import Body from "./Body";
import Header from "./Header";
import Pagination from "./Pagination";

export default function ProductTable() {
  // eslint-disable-next-line
  const [product, setProduct] = useState(productData);
  return (
    <Box
      sx={{
        boxShadow:
          "0px 0px 2px rgba(145, 158, 171, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)",
        borderRadius: "16px",
        p: 2,
        mt: 3,
      }}
    >
      <Box sx={{ mb: 2 , display:"flex", gap:2, justifyContent:"flex-end"}}>
        <ProductSort />
        <ProductSort />
      </Box>
      <TableContainer>
        <Table>
          <Header />
          <Body product={product} />
        </Table>
        <Pagination product={product} />
      </TableContainer>
    </Box>
  );
}
