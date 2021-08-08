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
import Layout from "../../components/Layout/Layout"
import BannerMovies from '../../components/Gamer/BannerMovies';

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

export default function Movies(props) {
    const classes = useStyles();

    return (
      <Layout user={props.user}>
        <div>
        <BannerMovies/>
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
                  title="Marvel Comics"
                  subheader="August 4, 2021"
                />
                <CardMedia
                  className={classes.media}
                  image="https://i2.wp.com/www.outoflives.net/wp-content/uploads/2019/08/No-Time-To-Die-Gunbarrel.jpg?resize=1280%2C720&ssl=1"
                  title="No Time to Die"
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    <h2>No Time to Die</h2>
                    After many delays and Amazon tryibg to buy the right of James Bond, No Time to Die finally gets its release date this fall.
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
                    title="Sony Entertainment"
                    subheader="August 4, 2021"
                  />
                  <CardMedia
                    className={classes.media}
                    image="https://images.hdqwalls.com/download/2019-john-wick-chapter-3-parabellum-4k-17-1280x720.jpg"
                    title="Grayson: Agent of Spyral"
                  />
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                      <h2>NFL</h2>
                      Green Bay Packers WR Devin Funchess apologizes for anti-Asian remark
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
                    title="Marvel Comics"
                    subheader="August 5, 2021"
                  />
                  <CardMedia
                    className={classes.media}
                    image="https://marketresearchtelecast.com/wp-content/uploads/2021/06/1623766617_Matrix-4-everything-you-need-to-know-1280x720.jpg"
                    title="Matrix 4"
                  />
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                      <h2>Matrix 4</h2>
                      In case you forget it ex
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
