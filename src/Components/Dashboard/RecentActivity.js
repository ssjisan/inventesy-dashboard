import { Box, Button, Typography } from "@mui/material";
import React from "react";

export default function RecentActivity() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography
          sx={{ fontSize: "16px", fontWeight: 700 }}
          color="text.1000"
        >
          {" "}
          Recent Activity
        </Typography>
        <Button sx={{padding:"4px 8px", backgroundColor:"text.200", color:"text.900", textTransform:"none"}}>View All</Button>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb:3 }}>
        <Typography sx={{ fontWeight: 600, fontSize: "14px" }}>
          {"name"} increased quantity of{" "}
          <span style={{ fontWeight: 700, color: "#F53062" }}>
            {"Product"}
          </span>{" "}
          by 3 to 4.
        </Typography>
        <Typography
          sx={{ fontWeight: 400, fontSize: "12px", color: "text.500" }}
        >
          02 Apr 2022 3:31 PM
        </Typography>
      </Box>
    </Box>
  );
}
