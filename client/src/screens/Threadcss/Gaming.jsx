import React from 'react'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import "./Thread.css";


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 500,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    avatar: {
      backgroundColor: red[500],
    },
  
  }));


export default function Gaming() {
    const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

    return (
        <div className="group">
        <div>
       <Card className={classes.root}>
        <CardHeader
          avatar={
             <Avatar aria-label="recipe" className={classes.avatar}>
              
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Rockstar Games"
          subheader="August 4, 2021"
        />
        <CardMedia
          className={classes.media}
          image="https://i.ytimg.com/vi/mP6KvFnltWc/maxresdefault.jpg"
          title="GTA:V Tuners"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
              <h2>Gaming</h2>
            A mix of Grand Theft Auto and Midnight Club is a feeling you'll get with the new GTA:V update
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      <div>
      <Card className={classes.root}>
        <CardHeader
          avatar={
             <Avatar aria-label="recipe" className={classes.avatar}>
              
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="New York Times"
          subheader="August 4, 2021"
        />
        <CardMedia
          className={classes.media}
          image="https://s7d2.scene7.com/is/image/TWCNews/082020_ap_joe_bidendncspeechwilmingtondelewareandrewharnikcredit"
          title="GTA:V Tuners"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
              <h2>Politics</h2>
          President Biden Delivers Remarks on his Administration’s Progress Toward Fighting the COVID-19 Pandemic by Increasing Vaccinations at Home and Around the World.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      </div>
      <div>
      <Card className={classes.root}>
        <CardHeader
          avatar={
             <Avatar aria-label="recipe" className={classes.avatar}>
              
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Electronic Arts"
          subheader="August 5, 2021"
        />
        <CardMedia
          className={classes.media}
          image="https://updatecrazy.com/wp-content/uploads/2021/06/Battlefield-2042-Cover-Art-1280x720.jpg"
          title="Battlefield: 2042"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
              <h2>Battlefield:2042</h2>
          Battlefield:2042
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card> 
      </div>
      </div>
      </div>
    )
}
