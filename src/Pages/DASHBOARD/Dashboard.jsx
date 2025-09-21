import React from 'react'
import { Box, Button, Stack } from '@mui/material'
import { DownloadOutlined } from "@mui/icons-material";
import Row1  from "./Row1";
import Row2  from "./Row2";
import Row3  from "./Row3";
import Title from '../../Components/Title';

function Dashboard() {
  return (
    <Box>
      <Stack direction={"row"} sx={{justifyContent: "space-between", alignItems: "center"}}>
        <Title title="DASHBOARD" subTitle="Welcome to your dashboard" />
        <Button variant="contained" color="primary">
          <DownloadOutlined sx={{ mr: 1 }} />
          Download Reports
        </Button>
      </Stack>

      <Row1 />
      <Row2 />
      <Row3 />
    </Box>
  )
}

export default Dashboard
