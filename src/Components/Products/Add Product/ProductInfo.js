import { Box, TextField } from "@mui/material";
import React from "react";

export default function ProductInfo() {
  return (
    <Box
      sx={{
        p: 3,
        boxShadow:
          "0px 0px 2px rgba(145, 158, 171, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)",
        padding: "20px 30px",
        borderRadius: "16px",
        display:"flex",
        flexDirection:"column",
        gap:2
      }}
    >
      <TextField id="outlined-basic" label="Product Name" variant="outlined" size="small"/>
      <TextField id="outlined-basic" label="Product Code" variant="outlined" size="small"/>
      <TextField id="outlined-basic" label="Product SKU" variant="outlined" size="small"/>
      <TextField id="outlined-basic" label="Unit Type" variant="outlined" size="small"/>
    </Box>
  );
}
