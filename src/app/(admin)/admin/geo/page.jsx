"use client";

import { Typography } from "@mui/material";
import GeoGraph from "../../../../components/Admin/Home/GeoGraph";

const Geo = () => {
  return (
    <div style={{ height: "500px" }}>
      <Typography variant="h6" mt={1}>
        Geographic Chart
      </Typography>
      <br />
      <GeoGraph />
    </div>
  );
};

export default Geo;
