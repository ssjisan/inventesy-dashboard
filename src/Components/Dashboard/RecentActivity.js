import { Box, Button, Typography } from "@mui/material";
import React from "react";
import log from "../../Assets/FakeData/ActivityLog.json";

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
        <Button
          sx={{
            padding: "4px 8px",
            backgroundColor: "text.200",
            color: "text.900",
            textTransform: "none",
          }}
        >
          View All
        </Button>
      </Box>
      {log.map((data) => {
        return (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 3 }}>
            {data.action === "load" && (
              <Typography sx={{ fontWeight: 600, fontSize: "14px" }}>
                {data.performedBy} sent &nbsp;
                <span style={{ fontWeight: 700, color: "#F53062" }}>
                  {data.description}
                </span>
              </Typography>
            )}
            {data.action === "adjust" && (
              <Typography sx={{ fontWeight: 600, fontSize: "14px" }}>
                {data.performedBy} adjust the quantity of &nbsp;
                <span style={{ fontWeight: 700, color: "#F53062" }}>
                  {data.description}
                </span>
              </Typography>
            )}
            {data.action === "delete" && (
              <Typography sx={{ fontWeight: 600, fontSize: "14px" }}>
                {data.performedBy} delete &nbsp;
                <span style={{ fontWeight: 700, color: "#F53062" }}>
                  {data.description}
                </span>{" "}
                &nbsp; from system
              </Typography>
            )}
            {data.action === "join" && (
              <Typography sx={{ fontWeight: 600, fontSize: "14px" }}>
                {data.performedBy} added &nbsp;
                <span style={{ fontWeight: 700, color: "#F53062" }}>
                  {data.description}
                </span>{" "}
                &nbsp; as salesman
              </Typography>
            )}
            <Typography
              sx={{ fontWeight: 400, fontSize: "12px", color: "text.500" }}
            >
              {data.time}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}
