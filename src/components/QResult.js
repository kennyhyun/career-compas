import * as React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export const QResult = ({ industry, percent }) => {
  return (
    <Paper elevation={0}>
      <Typography variant="subtitle1" gutterBottom>
        Baseed on your answers, we've worked out industry you're betst suited to is:
      </Typography>
      <Typography variant="h5" gutterBottom>
        {industry}
      </Typography>

      <CircularProgress variant="determinate" value={percent} />
    </Paper>
  );
};
