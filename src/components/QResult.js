import * as React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export const QResult = ({ industry, percent }) => {
  return (
    <Paper elevation={0} alignItems="center" justifyContent="center">
      <Typography variant="subtitle1" gutterBottom>
        Baseed on your answers, we've worked out industry you're betst suited to is:
      </Typography>
      <Typography variant="h4" gutterBottom>
        {industry}
      </Typography>
      <Typography variant="h4" gutterBottom>
        {percent}%
      </Typography>
      <CircularProgress variant="determinate" value={percent} size={100} />
      <Typography variant="h5" gutterBottom>
        Possible Job Titles:
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Web Developer, Mobile App, Bacend Web Developer, Mobile App, Bacend Web Developer, Mobile
        App, Bacend Web Developer, Mobile App, Bacend Web Developer, Mobile App, Bacend Web
        Developer, Mobile App, Bacend Web Developer, Mobile App, Bacend Web Developer, Mobile App,
        Bacend Web Developer, Mobile App, Bacend Web Developer, Mobile App, Bacend
      </Typography>

      <Button
        size="lage"
        fullWidth={true}
        variant="contained"
        //onClick={addPoint(point)}
      >
        Start Again
      </Button>
    </Paper>
  );
};
