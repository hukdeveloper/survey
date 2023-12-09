"use client";
import React from "react";
import Chart from "react-google-charts";

const ScatterPlot = () => {
  const data = [
    ["Height", "Gender"],
    [6.1, 1],
    [5.4, 0],
    [6.3, 1],
    [6.1, 1],
    [5.9, 0],
    [6.8, 1],
    [6.2, 1],
    [5.2, 0],
    [5.4, 1],
    [5.4, 0],
    [5.4, 1],
    [5.8, 1],
    [5.2, 1],
    [6.7, 1],
    [6.5, 0],
    [5.2, 1],
    [6.0, 1],
    [5.9, 0],
    [5.2, 0],
    [5.6, 1],
    [6.3, 1],

    [6.4, 0],
    [6.0, 1],
    [5.3, 0],
    [6.3, 0],
    [6.2, 0],
    [5.2, 0],
    [5.7, 1],
    [6.3, 1],
    [5.2, 1],
    [6.8, 1],
    [5.3, 1],
    [6.0, 1],
    [5.4, 1],
    [6.1, 1],
    [6.0, 0],
    [5.1, 1],
    [5.2, 0],
    [6.3, 1],
    [5.9, 0],
    [6.8, 1],
    [6.1, 1],
    [6.2, 0],
    [6.3, 1],
    [5.2, 1],
    [5.1, 0],
    [5.3, 0],
    [6.3, 0],
    [5.5, 0],
    [5.4, 1],
    [6.4, 0],
    [5.3, 0],
    [5.3, 0],
    [5.3, 1],
    [5.6, 0],
    [5.1, 1],
    [6.0, 1],
    [5.4, 1],
    [5.9, 0],
    [5.5, 0],
    [5.8, 0],
    [5.4, 1],
    [5.6, 1],
    [6.5, 0],
    [5.1, 0],
    [6.2, 0],
    [6.2, 0],
    [5.8, 0],
    [6.3, 0],
    [6.1, 0],
    [6.0, 1],
  ];

  const options = {
    title: "Histogram",
    legend: { position: "top", maxLines: 2 },
    colors: ["#5C3292", "#1A8763"],
    interpolateNulls: false,
  };

  return (
    <div style={{ height: "400px", width: "800px" }}>
      <Chart
        width={"100%"}
        height={"100%"}
        chartType="Histogram"
        loader={<div>Loading Chart</div>}
        data={data}
        options={options}
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
};

export default ScatterPlot;
