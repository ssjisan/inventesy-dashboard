import { Box, Typography } from "@mui/material";
import React from "react";
import ReactApexChart from "react-apexcharts";
const state = {
  series: [44, 55, 41, 17, 15],
  options: {
    chart: {
      width: 490,
      type: "donut",
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
    },
    responsive: [
      {
        breakpoint: 767,
        options: {
          chart: {
            width: 350,
          },
          legend: {
            show: true,
          },
        },
      },
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 280,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
  },
};

export default function PieChart() {
  return (
    <Box>
      <Typography
        sx={{ fontSize: "16px", fontWeight: 700, mb: 3 }}
        color="text.1000"
      >
        Sales statistics by Zone
      </Typography>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="donut"
        width={420}
      />
    </Box>
  );
}
