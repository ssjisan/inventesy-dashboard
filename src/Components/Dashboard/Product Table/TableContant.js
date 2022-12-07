import React from "react";
import { Avatar, TableBody, TableRow } from "@mui/material";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
export default function TableContant({ product }) {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.body}`]: {
      color: "#212121",
      fontWeight: "500",
    },
  }));
  return (
    <TableBody>
      {product.map((data) => (
        <TableRow>
          <StyledTableCell
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 2,
            }}
          >
            {" "}
            <Avatar alt={data.title} src={data.image} /> {data.title}
          </StyledTableCell>
          <StyledTableCell align="right">{data.brand}</StyledTableCell>
          <StyledTableCell align="right">{data.category}</StyledTableCell>
          <StyledTableCell align="right">{data.price}</StyledTableCell>
          <StyledTableCell align="right">Status</StyledTableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
