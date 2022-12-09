import { Card, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import stateData from "../../Assets/FakeData/state.json";
import { Box } from "@mui/system";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
export default function StateCard() {
    
  // eslint-disable-next-line
  const [state, setState] = useState(stateData);
  return (
    <Grid container spacing={3} sx={{mt:2}}>
      {state.map((data) => (
        <Grid item xs={12} sm={6} md={3} key={data.id}>
          <Card
            sx={{
              boxShadow:
                "0px 0px 2px rgba(145, 158, 171, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)",
              padding: "20px 30px",
              borderRadius: "16px",
            }}
          >
            <Box>
              <Typography sx={{ fontSize: "20px", mb: 2, fontWeight: 400 }}>
                {data.title}
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
                  {data.amount}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {data.state >= 10 ? (
                    <ArrowDropUpIcon sx={{ color: "#00B929" }} />
                  ) : (
                    <ArrowDropDownIcon sx={{ color: "#B90000" }} />
                  )}
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 600,
                      color: data.state >= 10 ? "#00B929" : "#B90000",
                    }}
                  >
                    {data.state}%
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
//
