import React from "react";
import { Avatar, Chip, TableBody, TableRow } from "@mui/material";
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
          <StyledTableCell align="center">
           {data.stock >=10 ? <Chip
              label="in stock"
              sx={{
                fontSize: "14px",
                fontWeight: 600,
                backgroundColor: "#DDEDDD",
                color: "#1B5E20",
              }}
            />
            : <Chip
              label="out of stock"
              sx={{
                fontSize: "14px",
                fontWeight: 600,
                backgroundColor: "#FFCDD2",
                color: "#B71C1C",
              }}
            />}
          </StyledTableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
