import React from 'react'
import { Box, Paper, Typography, useTheme } from '@mui/material'
import { ResponsivePie } from '@nivo/pie';


function Card({ icon, title, subTitle, increase, data, scheme }) {
    const theme = useTheme();
  return (
    <Paper
      sx={{
        minWidth: "333px",
        p: 2,
        mb: 2,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} gap={1} >
        {icon}
        <Typography variant="body1">{title}</Typography>
        <Typography variant="body1">{subTitle}</Typography>
      </Box>
      <Box textAlign={"center"}>
        <Box
          sx={{
            height: "100px",
            width: "100px",
            borderRadius: 2,
          }}
        >
          <ResponsivePie /* or Pie for fixed dimensions */
            data={data}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            colors={{ scheme: scheme }}
            enableArcLabels={false}
            enableArcLinkLabels={false}
            innerRadius={0.6}
            padAngle={0.15}
            cornerRadius={2}
            activeOuterRadiusOffset={8}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsColor={{ from: "color" }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
            theme={{
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "#ffffff",
              },
              axis: {
                domain: {
                  line: {
                    stroke: "#777777",
                    strokeWidth: 1,
                  },
                },
                legend: {
                  text: {
                    fontSize: 12,
                    fill: theme.palette.text.primary,
                    outlineWidth: 0,
                    outlineColor: "#ffffff",
                  },
                },
                ticks: {
                  line: {
                    stroke: "#777777",
                    strokeWidth: 1,
                  },
                  text: {
                    fontSize: 11,
                    fill: theme.palette.text.primary,
                    outlineWidth: 0,
                    outlineColor: "#ffffff",
                  },
                },
              },
              grid: {
                line: {
                  stroke: "#dddddd",
                  strokeWidth: 1,
                },
              },
              legends: {
                title: {
                  text: {
                    fontSize: 11,
                    fill: theme.palette.text.primary,
                    outlineWidth: 0,
                    outlineColor: "#ffffff",
                  },
                },
                text: {
                  fontSize: 11,
                  fill: theme.palette.text.primary,
                  outlineWidth: 0,
                  outlineColor: "#ffffff",
                },
                ticks: {
                  line: {},
                  text: {
                    fontSize: 10,
                    fill: theme.palette.text.primary,
                    outlineWidth: 0,
                    outlineColor: "#ffffff",
                  },
                },
              },
              annotations: {
                text: {
                  fontSize: 13,
                  fill: theme.palette.text.primary,
                  outlineWidth: 2,
                  outlineColor: "#ffffff",
                  outlineOpacity: 1,
                },
                link: {
                  stroke: "#000000",
                  strokeWidth: 1,
                  outlineWidth: 2,
                  outlineColor: "#ffffff",
                  outlineOpacity: 1,
                },
                outline: {
                  stroke: "#000000",
                  strokeWidth: 2,
                  outlineWidth: 2,
                  outlineColor: "#ffffff",
                  outlineOpacity: 1,
                },
                symbol: {
                  fill: "#000000",
                  outlineWidth: 2,
                  outlineColor: "#ffffff",
                  outlineOpacity: 1,
                },
              },
              tooltip: {
                // wrapper: {},
                container: {
                  background: theme.palette.background.default,
                  color: theme.palette.text.primary,
                  fontSize: 12,
                },
                basic: {},
                chip: {},
                table: {},
                tableCell: {},
                tableCellValue: {},
              },
            }}
          />
        </Box>
        <Typography variant="body1">{increase}</Typography>
      </Box>
    </Paper>
  );
}

export default Card
