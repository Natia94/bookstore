import React from "react";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import MoodIcon from '@material-ui/icons/Mood';
import HighlightIcon from '@material-ui/icons/Highlight';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import { black } from "color-name";

import ExpandLessOutlinedIcon from '@material-ui/icons/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';


const useStyles = makeStyles(theme => ({

    root: {
        maxWidth: 345,
        flexGrow: 1,
        backgroundColor: [black]
    },
    media: {
        height: 0,
        paddingTop: "80.25%"
    },
    avatar: {
         backgroundColor: red[500]
    }
}));

export default function voting (props) {
    const classes = useStyles();
    return (
        
        <div className={classes.root}>

        <Grid container spacing={1}>
        
          <Grid item xs={4}>
            <Tooltip title="popularity">
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
            </Tooltip>
          </Grid>

          <Grid item xs={4}>
            <Tooltip title="Inteligence">
                <IconButton aria-label="light">
                    <HighlightIcon/>
                </IconButton>
            </Tooltip>
          </Grid>

          <Grid item xs={4}>
            <Tooltip title="Funny">
                <IconButton aria-label="emoji_objects">
                    <MoodIcon/>
                </IconButton>
            </Tooltip>
          </Grid>

        </Grid>
      </div>
    );
}








