import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function TimerFunction() {
  const today = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var date = today.getDate();
  var day = weekday[today.getDay()];
  var month = months[today.getMonth()];
  var year = today.getFullYear();
  return (
    <Box sx={{width:"240px"}}>
      <Typography variant="body2" color="text.600" sx={{  mr: 2 }}>
        {date} {month} {year}, {day}
      </Typography>
    </Box>
  );
}
