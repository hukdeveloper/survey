"use client";

import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Gender", "Value"],
  ["Male", 1000],
  ["Female", 1170],
];

export const options = {
  chart: {
    title: "Gender Classifications",
  },
};

const Gender = () => {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
};

export default Gender;
