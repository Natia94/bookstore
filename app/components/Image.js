import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";

import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "80.25%"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function image (props) {
  const classes = useStyles();
    console.log('props', props.imageUri.img)

  return (
    <Card className={classes.root}>

      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            N
          </Avatar>
        }
        action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
        }
        title="Where did you sleep last night"
      />

      <CardMedia
        className={classes.media}
        image={props.imageUri.img}
        title="Paella dish"
      />

    </Card>
  );
}
