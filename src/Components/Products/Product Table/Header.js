import { TableHead, TableRow } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

export default function Header() {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#F4F6F8",
      color: "#757575",
      fontWeight: "600",
      borderBottom: "none",
    },
    "&:first-child": {
      borderRadius: "10px 0px 0px 10px",
    },
    "&:last-child": {
      borderRadius: "0px 10px 10px 0px",
    },
  }));
  return (
    <TableHead sx={{ borderRadius: "1em 0 0 1em" }}>
      <TableRow>
        <StyledTableCell>Name</StyledTableCell>
        <StyledTableCell align="center">SKU</StyledTableCell>
        <StyledTableCell align="center">Brand</StyledTableCell>
        <StyledTableCell align="center">Category</StyledTableCell>
        <StyledTableCell align="center">Price</StyledTableCell>
        <StyledTableCell align="center">Reorder Point</StyledTableCell>
        <StyledTableCell align="center">Status</StyledTableCell>
        <StyledTableCell align="center"></StyledTableCell>
      </TableRow>
    </TableHead>
  );
}
