import { TablePagination } from "@mui/material";
import React from "react";

export default function Pagination({ product }) {
  return (
    <TablePagination
      count={product.length}
      sx={{ borderBottom: "none", borderTop:"1px solid rgba(145, 158, 171, 0.24)"}}
      component="div"
    />
  );
}
