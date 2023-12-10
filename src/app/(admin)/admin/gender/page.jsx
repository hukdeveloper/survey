"use client";

import { Typography } from "@mui/material";
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Gender", "Value"],
  ["Male", 1000],
  ["Female", 1170],
];

export const options = {
  chart: {
    title: "Pie Chart",
  },
};

const Gender = () => {
  return (
    <>
      <Typography variant="h6" mt={1}>
        Pi Chart
      </Typography>{" "}
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </>
  );
};

export default Gender;
