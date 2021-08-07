import { useState, useEffect } from 'react';
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
import "./Thread.css";
import { getThreads } from '../../services/thread';

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

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [threads, setThreads] = useState([])

  useEffect(() => {
    const fetchThreads = async () => {
      let data = await getThreads()
      console.log(data)
      setThreads(data)
    }
    fetchThreads()
  }, [])



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
            <Typography variant="body2" color="textSecondary" component="div">
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
        {/* <div>
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
              <Typography variant="body2" color="textSecondary" component="div">
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
              title="New York Times"
              subheader="August 4, 2021"
            />
            <CardMedia
              className={classes.media}
              image="https://images.hdqwalls.com/download/venom-2-8k-ux-1280x720.jpg"
              title="GTA:V Tuners"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="div">
                <h2>Comics</h2>
                Spider-Man day has passed and fans are still wondering when Spider-Man: No Way Home will release,but Sony manages to drop a new Venom trailer
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
        // </div> */}
      </div>
    </div>
  );
}