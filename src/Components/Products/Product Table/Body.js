import React from "react";
import { Avatar, Chip, IconButton, TableBody, TableRow } from "@mui/material";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import MoreVertIcon from "@mui/icons-material/MoreVert";
export default function Body({ product }) {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.body}`]: {
      color: "#212121",
      fontWeight: "500",
      border:"none"
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
            <Avatar alt={data.title} src={data.image} sx={{backgroundColor: "#EBEFF2", height:"40px", width:"40px", borderRadius:"8px"}}/> {data.title}
          </StyledTableCell>
          <StyledTableCell align="center">"SKU"</StyledTableCell>
          <StyledTableCell align="center">"Brand"</StyledTableCell>
          <StyledTableCell align="center">"Category"</StyledTableCell>
          <StyledTableCell align="center">{data.price}</StyledTableCell>
          <StyledTableCell align="center">"Reorder Point"</StyledTableCell>
          <StyledTableCell align="center">
            {data.stock >= 10 ? (
              <Chip
                label="in stock"
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  backgroundColor: "#DDEDDD",
                  color: "#1B5E20",
                }}
              />
            ) : (
              <Chip
                label="out of stock"
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  backgroundColor: "#FFCDD2",
                  color: "#B71C1C",
                }}
              />
            )}
          </StyledTableCell>
          <StyledTableCell align="center">
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </StyledTableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
