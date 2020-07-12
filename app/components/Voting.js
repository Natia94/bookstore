import React, { useState } from "react";
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
import {green} from '@material-ui/core/colors';

import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import { createMuiTheme } from '@material-ui/core/styles';

import RadioButtons from './RadioButtons'

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 345,
        flexGrow: 1,
        flexwrap: "wrap"
    },
    media: {
        height: 0,
        paddingTop: "80.25%"
    },
    avatar: {
        backgroundColor: red[500]
    }
}));

const theme = createMuiTheme({
    palette: {
      primary: {
        main: red[500],
      },
      secondary: {
        main: green[500],
      },
    },
});

export default function voting (props) {
    const classes = useStyles();

    // const [color, setColor] = useState(theme.palette.primary);
    const weights = props.weights.weights
    console.log('voting props', weights)

    return (
        <div className={classes.root}>

        <Grid container spacing={1}>
        
            <Grid item xs={4}>
                <Tooltip title="popularity">
                    <IconButton aria-label="add to favorites">
                        <KeyboardArrowLeftIcon color = "primary" onClick={() => {console.log('n' )}} />
                            <FavoriteIcon /> 
                            {/* setColor(classes.palette.secondary) */}
                        <KeyboardArrowRightIcon/>
                        {weights.popularity}
                    </IconButton>
                </Tooltip>
            </Grid>

            <Grid item xs={4}>
                <Tooltip title="Inteligence">
                    <IconButton aria-label="light">
                        <KeyboardArrowLeftIcon/>
                            <HighlightIcon/>
                        <KeyboardArrowRightIcon/>
                        {weights.intelligence}
                    </IconButton>
                </Tooltip>
            </Grid>

            <Grid item xs={4}>
                <Tooltip title="Funny">
                    <IconButton aria-label="emoji_objects">
                        <KeyboardArrowLeftIcon/>
                            <MoodIcon/> 
                        <KeyboardArrowRightIcon/>
                        {weights.funny}
                    </IconButton>
                </Tooltip>
            </Grid>
        </Grid>
      </div>
    );
}