import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Banner from '../../components/Gamer/Banner';
import Layout from "../../components/Layout/Layout"
import { Link, useParams } from "react-router-dom"



const useStyles = makeStyles((theme) => ({
  root: {
    width: 350,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },

}));



export default function Gaming(props) {
  const classes = useStyles();
  const { id } = useParams()


  return (
    <Layout user={props.user}>
      <div>
        <Banner />
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
                  {/* SHOULD BE thread._id for the link */}
                  <Link to={`threads/${id}`}><h2>Grand Theft Auto</h2></Link>
                  A mix of Grand Theft Auto and Midnight Club is a feeling you'll get with the new GTA:V update "Los Santos Tuners".

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
                  title="Electronic Arts"
                  subheader="August 4, 2021"
                />
                <CardMedia
                  className={classes.media}
                  image="https://images.purexbox.com/9bdca064889a0/1280x720.jpg"
                  title="GTA:V Tuners"
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    <h2>Dead Space</h2>
                    Dead Space is getting a remake. Yes you're reading this correctly after eight years and a Viseral Games shutting down. EA is now bringing back a fan favorite series with a fan favorite protagonist Issac Clarke to don his Plasma Cutter once more.
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
                    DICE is making a comeback from their faults with Battlefield:V, now they're bring it back from World War 2 to World War 3 in a futuristic yet modern setting.
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
      </div>
    </Layout>
  )
}
