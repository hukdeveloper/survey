"use client";

import { ResponsiveChoropleth } from "@nivo/geo";
import React from "react";

const GeoGraph = () => {
  const data = [
    { id: "Chennai", value: 2 },
    { id: "Eastern Time (US & Canada)", value: 168 },
    { id: "Belgrade", value: 4 },
    { id: "Pacific Time (US & Canada)", value: 139 },
    { id: "Central Time (US & Canada)", value: 92 },
    { id: "Amsterdam", value: 22 },
    { id: "Atlantic Time (Canada)", value: 18 },
    { id: "Arizona", value: 15 },
    { id: "London", value: 61 },
    { id: "Hong Kong", value: 1 },
    { id: "Caracas", value: 2 },
    { id: "Krasnoyarsk", value: 1 },
    { id: "Casablanca", value: 8 },
    { id: "Tijuana", value: 1 },
    { id: "Abu Dhabi", value: 1 },
    { id: "America/Los_Angeles", value: 2 },
    { id: "Baghdad", value: 3 },
    { id: "Edinburgh", value: 3 },
    { id: "Tokyo", value: 3 },
    { id: "Riyadh", value: 1 },
    { id: "Seoul", value: 1 },
    { id: "Athens", value: 8 },
    { id: "Dublin", value: 7 },
    { id: "Madrid", value: 1 },
    { id: "Quito", value: 14 },
    { id: "Kuala Lumpur", value: 2 },
    { id: "Wellington", value: 2 },
    { id: "Beijing", value: 2 },
    { id: "Pretoria", value: 3 },
    { id: "Urumqi", value: 1 },
    { id: "Alaska", value: 4 },
    { id: "Greenland", value: 1 },
    { id: "Sydney", value: 2 },
    { id: "Berlin", value: 11 },
    { id: "Brussels", value: 2 },
    { id: "Melbourne", value: 2 },
    { id: "Montréal", value: 1 },
    { id: "Jakarta", value: 2 },
    { id: "Santiago", value: 2 },
    { id: "Paris", value: 5 },
    { id: "Nuku'alofa", value: 2 },
    { id: "Saskatchewan", value: 1 },
    { id: "Stockholm", value: 1 },
    { id: "Vienna", value: 1 },
    { id: "Buenos Aires", value: 1 },
    { id: "Brasília", value: 3 },
    { id: "Irkutsk", value: 1 },
    { id: "Bogotá", value: 2 },
    { id: "Prague", value: 1 },
    { id: "Mexico City", value: 1 },
    { id: "Stockholm", value: 1 },
    { id: "Samara", value: 1 },
    { id: "Yakutsk", value: 1 },
    { id: "Tashkent", value: 1 },
    { id: "UTC", value: 1 },
    { id: "Bogotá", value: 1 },
    { id: "Prague", value: 1 },
    { id: "Mexico City", value: 1 },
    { id: "Tashkent", value: 1 },
    { id: "Yakutsk", value: 1 },
    { id: "UTC", value: 1 },
    { id: "Midway Island", value: 1 },
    { id: "West Central Africa", value: 2 },
    { id: "International Date Line West", value: 1 },
    { id: "La Paz", value: 1 },
    { id: "Volgograd", value: 1 },
    { id: "Jerusalem", value: 1 },
    { id: "Sofia", value: 1 },
    { id: "Sri Jayawardenepura", value: 1 },
    { id: "Zagreb", value: 1 },
    { id: "Kyiv", value: 1 },
    { id: "Abu Dhabi", value: 1 },
    { id: "Lisbon", value: 1 },
    { id: "Pretoria", value: 1 },
    { id: "Karachi", value: 1 },
  ];
  return (
    <ResponsiveChoropleth
      data={data}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionTranslation={[0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      enableGraticule={true}
      graticuleLineColor="#dddddd"
      borderWidth={0.5}
      borderColor="#152538"
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
        {
          id: "gradient",
          type: "linearGradient",
          colors: [
            {
              offset: 0,
              color: "#000",
            },
            {
              offset: 100,
              color: "inherit",
            },
          ],
        },
      ]}
      fill={[
        {
          match: {
            id: "CAN",
          },
          id: "dots",
        },
        {
          match: {
            id: "CHN",
          },
          id: "lines",
        },
        {
          match: {
            id: "ATA",
          },
          id: "gradient",
        },
      ]}
      legends={[
        {
          anchor: "bottom-left",
          direction: "column",
          justify: true,
          translateX: 20,
          translateY: -100,
          itemsSpacing: 0,
          itemWidth: 94,
          itemHeight: 18,
          itemDirection: "left-to-right",
          itemTextColor: "#444444",
          itemOpacity: 0.85,
          symbolSize: 18,
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000000",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default GeoGraph;
