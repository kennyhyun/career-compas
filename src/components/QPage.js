import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const QPage = ({ label, text, point, add, delete }) => {
  return (
    <Card>
      <CardMedia component="img" height="140" image="image/question/IMG_0002.JPG" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Question 1
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {text}
        </Typography>

        <Button size="lage" fullWidth={true} variant="contained" onClick={add(point)} >
          YES
        </Button>
        <br />
        <br />
        <Button size="large" fullWidth={true} variant="contained" onClick={delete(point)}>
          NO
        </Button>
      </CardContent>
    </Card>
  );
};
