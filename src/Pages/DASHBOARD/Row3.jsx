import React from "react";
import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import Pie from "../PIECHART/Pie";
import Bar from "../BARCHART/Bar";
import Geo from "../GEOGRAPHY/Geo";

function Row3() {
  const theme = useTheme();
  return (
    <Stack direction="row" flexWrap={"wrap"} gap={2} sx={{ mb: "20px" }}>
      <Paper sx={{ width: "31%", minWidth: "400px", p: "10px", flexGrow: 1 }}>
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight="600"
        >
          Campaign
        </Typography>
        <Pie isDashboard={true} />
        <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          $48,352 revenue generated
        </Typography>
        <Typography variant="body2" px={0.7} pb={3} align="center">
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>
      <Paper sx={{ width: "33%", minWidth: "400px", p: "10px", flexGrow: 1 }}>
        <Typography
          color={theme.palette.secondary.main}
          variant="h6"
          fontWeight="600"
          sx={{ padding: "30px 30px 0 30px" }}
        >
          Sales Quantity
        </Typography>
        <Bar isDashbord />
      </Paper>
      <Paper sx={{ width: "33%", minWidth: "400px", p: "10px", flexGrow: 1 }}>
        <Typography
          color={theme.palette.secondary.main}
          variant="h6"
          fontWeight="600"
          sx={{ padding: "30px 30px 0 30px" }}
        >
          Geography Based Traffic
        </Typography>
        <Geo isDashboard />
      </Paper>
    </Stack>
  );
}

export default Row3;
