import { TablePagination } from "@mui/material";
import React from "react";

export default function Pagination({ product }) {
  return (
    <TablePagination
      count={product.length}
      sx={{ borderBottom: "none" }}
      component="div"
    />
  );
}
