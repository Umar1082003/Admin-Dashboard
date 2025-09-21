import React from "react";
import { Box, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "japan",
    data: [
      {
        x: "plane",
        y: 180,
      },
      {
        x: "helicopter",
        y: 145,
      },
      {
        x: "boat",
        y: 269,
      },
      {
        x: "train",
        y: 191,
      },
      {
        x: "subway",
        y: 144,
      },
      {
        x: "bus",
        y: 136,
      },
      {
        x: "car",
        y: 281,
      },
      {
        x: "moto",
        y: 162,
      },
      {
        x: "bicycle",
        y: 296,
      },
      {
        x: "horse",
        y: 214,
      },
      {
        x: "skateboard",
        y: 191,
      },
      {
        x: "others",
        y: 114,
      },
    ],
  },
  {
    id: "france",
    data: [
      {
        x: "plane",
        y: 2,
      },
      {
        x: "helicopter",
        y: 229,
      },
      {
        x: "boat",
        y: 285,
      },
      {
        x: "train",
        y: 120,
      },
      {
        x: "subway",
        y: 151,
      },
      {
        x: "bus",
        y: 120,
      },
      {
        x: "car",
        y: 237,
      },
      {
        x: "moto",
        y: 244,
      },
      {
        x: "bicycle",
        y: 168,
      },
      {
        x: "horse",
        y: 62,
      },
      {
        x: "skateboard",
        y: 252,
      },
      {
        x: "others",
        y: 286,
      },
    ],
  },
  {
    id: "us",
    data: [
      {
        x: "plane",
        y: 201,
      },
      {
        x: "helicopter",
        y: 189,
      },
      {
        x: "boat",
        y: 94,
      },
      {
        x: "train",
        y: 239,
      },
      {
        x: "subway",
        y: 122,
      },
      {
        x: "bus",
        y: 249,
      },
      {
        x: "car",
        y: 39,
      },
      {
        x: "moto",
        y: 215,
      },
      {
        x: "bicycle",
        y: 18,
      },
      {
        x: "horse",
        y: 126,
      },
      {
        x: "skateboard",
        y: 19,
      },
      {
        x: "others",
        y: 275,
      },
    ],
  },
  {
    id: "germany",
    data: [
      {
        x: "plane",
        y: 120,
      },
      {
        x: "helicopter",
        y: 102,
      },
      {
        x: "boat",
        y: 114,
      },
      {
        x: "train",
        y: 234,
      },
      {
        x: "subway",
        y: 110,
      },
      {
        x: "bus",
        y: 204,
      },
      {
        x: "car",
        y: 36,
      },
      {
        x: "moto",
        y: 214,
      },
      {
        x: "bicycle",
        y: 228,
      },
      {
        x: "horse",
        y: 71,
      },
      {
        x: "skateboard",
        y: 30,
      },
      {
        x: "others",
        y: 182,
      },
    ],
  },
  {
    id: "norway",
    data: [
      {
        x: "plane",
        y: 190,
      },
      {
        x: "helicopter",
        y: 100,
      },
      {
        x: "boat",
        y: 72,
      },
      {
        x: "train",
        y: 184,
      },
      {
        x: "subway",
        y: 137,
      },
      {
        x: "bus",
        y: 130,
      },
      {
        x: "car",
        y: 146,
      },
      {
        x: "moto",
        y: 72,
      },
      {
        x: "bicycle",
        y: 171,
      },
      {
        x: "horse",
        y: 216,
      },
      {
        x: "skateboard",
        y: 104,
      },
      {
        x: "others",
        y: 222,
      },
    ],
  },
];

function Line({ isDashboard = false }) {
  const theme = useTheme();

  return (
    <Box sx={{ height: isDashboard ? "360px" : "75vh" }}>
      <ResponsiveLine /* or Line for fixed dimensions */
        data={data}
        theme={{
          text: {
            fontSize: 11,
            fill: theme.palette.text.primary,
            outlineWidth: 0,
            outlineColor: theme.palette.text.primary,
          },
          axis: {
            domain: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: theme.palette.text.primary,
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: theme.palette.text.primary,
              },
            },
          },
          grid: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth: 1,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: theme.palette.text.primary,
              },
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
              outlineWidth: 0,
              outlineColor: theme.palette.text.primary,
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: theme.palette.text.primary,
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: theme.palette.text.primary,
              outlineWidth: 2,
              outlineColor: theme.palette.text.primary,
              outlineOpacity: 1,
            },
            link: {
              stroke: theme.palette.text.primary,
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: theme.palette.text.primary,
              outlineOpacity: 1,
            },
            outline: {
              stroke: theme.palette.text.primary,
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: theme.palette.text.primary,
              outlineOpacity: 1,
            },
            symbol: {
              fill: theme.palette.text.primary,
              outlineWidth: 2,
              outlineColor: theme.palette.text.primary,
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
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        axisBottom={{
          legend: isDashboard ? null : "transportation",
          legendOffset: 36,
        }}
        axisLeft={{ legend: isDashboard ? null : "count", legendOffset: -40 }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "seriesColor" }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        curve="catmullRom"
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            translateX: 100,
            itemWidth: 80,
            itemHeight: 22,
            symbolShape: "circle",
          },
        ]}
      />
    </Box>
  );
}

export default Line;
