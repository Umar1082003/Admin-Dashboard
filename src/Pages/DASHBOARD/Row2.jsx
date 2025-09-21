import React from "react";
import { Box, Paper, Stack, Typography, IconButton, useTheme } from "@mui/material";
import Line from "../LINECHART/Line";
import { DownloadOutlined } from "@mui/icons-material";
import { Transactions } from "./data";


function Row2() {
  const theme = useTheme();
  return (
    <Stack direction={"row"} spacing={2} mb={2} mt={2} flexWrap="wrap">
      <Paper sx={{ maxWidth: 900, flexGrow: 1, minWidth: "400px" }}>
        <Stack
          direction={"row"}
          justifyContent="space-between"
          alignItems={"center"}
        >
          <Box>
            <Typography
              color={theme.palette.secondary.main}
              mb={1}
              mt={2}
              ml={4}
              variant="h6"
              fontWeight={"bold"}
            >
              Revenue Generated
            </Typography>
            <Typography variant="body2" ml={4}>
              $59,342.32
            </Typography>
          </Box>
          <Box>
            <IconButton sx={{ mr: 3 }}>
              <DownloadOutlined />
            </IconButton>
          </Box>
        </Stack>
        <Line isDashboard />
      </Paper>
      <Box
        mt={2}
        flexGrow={1}
        sx={{ minWidth: "280px", maxHeight: 455, overflow: "auto", flexBasis: 1 }}
      >
        <Paper>
          <Typography
            color={theme.palette.secondary.main}
            fontWeight={"bold"}
            p={2}
            variant="h6"
          >
            Recent Transactions
          </Typography>
        </Paper>
        {Transactions.map((transaction) => {
          return (
            <Paper key={transaction.txId} sx={{ my: 2 }}>
              <Stack
                direction={"row"}
                justifyContent="space-between"
                alignItems={"center"}
                p={2}
              >
                <Box>
                  <Typography variant="body1">{transaction.txId}</Typography>
                  <Typography variant="body2">{transaction.user}</Typography>
                </Box>
                <Box>
                  <Typography variant="body1">{transaction.date}</Typography>
                </Box>
                <Box>
                  <Typography
                    borderRadius={1.4}
                    p={1}
                    bgcolor={theme.palette.error.main}
                    color={theme.palette.getContrastText(
                      theme.palette.error.main
                    )}
                    variant="body2"
                  >
                    {transaction.cost}
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          );
        })}
      </Box>
    </Stack>
  );
}

export default Row2;
