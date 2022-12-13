import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React from "react";

export default function ProductPrice() {
  return (
    <Box
      sx={{
        p: 3,
        boxShadow:
          "0px 0px 2px rgba(145, 158, 171, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)",
        padding: "20px 30px",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <FormControl fullWidth sx={{ mb: 1 }} size="small">
        <InputLabel htmlFor="outlined-adornment-amount">
          Regular Price
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          value=""
          startAdornment={<InputAdornment position="start">৳</InputAdornment>}
          label="Regular Price"
        />
      </FormControl>
      <FormControl fullWidth sx={{ mb: 1 }} size="small">
        <InputLabel htmlFor="outlined-adornment-amount">Sale Price</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          value=""
          startAdornment={<InputAdornment position="start">৳</InputAdornment>}
          label="Sale Price"
        />
      </FormControl>
      <TextField
        id="outlined-basic"
        label="Reorder Point"
        variant="outlined"
        size="small"
      />
    </Box>
  );
}
