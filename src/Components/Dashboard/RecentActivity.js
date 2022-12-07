import { Box, Button,  Typography } from "@mui/material";
import React from "react";

export default function RecentActivity() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ fontSize: "18px", fontWeight: 700 }}
          color="text.1000"
        >
          {" "}
          Recent Activity
        </Typography>
        <Button>View All</Button>
      </Box>
    </Box>
  );
}
