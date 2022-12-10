import React, { useState } from "react";
import {
  Menu,
  Button,
  MenuItem,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const SORT_BY_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "priceDesc", label: "Price: High-Low" },
  { value: "priceAsc", label: "Price: Low-High" },
];

export default function ProductSort() {
  const [open, setOpen] = useState(null);
  const [sort, setSort] = useState("Newest");
  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };
  return (
    <>
      <Button color="inherit" disableRipple onClick={handleOpen}>
        {" "}
        Sort By:&nbsp;
        <Typography
          component="span"
          variant="subtitle2"
          sx={{ color: "text.secondary" }}
        >
          {sort}
        </Typography>
      </Button>
      <Menu
        keepMounted
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        {SORT_BY_OPTIONS.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.value === "newest"}
            onClick={handleClose}
            sx={{ typography: "body2" }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
