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
import BannerComic from '../../components/Gamer/BannerComic';


const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },

}));

export default function Comics(props) {
  const classes = useStyles();

  return (
    <Layout user={props.user}>
      <div>
        <BannerComic />
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
                title="DC Entertainment"
                subheader="August 4, 2021"
              />
              <CardMedia
                className={classes.media}
                image="https://i2.wp.com/www.mobi-racer.com/wp-content/uploads/2021/03/The-Suicide-Squad-2021.jpg"
                title="Suicide Squad"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  <h2>The Suicide Squad</h2>
                  The Suicide Squad directed by James Gunn is a soft reboot that takes place a few months after Suicide Squad, confusing right?
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
                  image="https://assets-prd.ignimgs.com/2021/05/10/venom2-poster-thumb-1620643135206.jpg"
                  title="GTA:V Tuners"
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    <h2>Venom: Let There Be Carnage</h2>
                    With Venom's success, Sony greenlights it's next installment
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
                  image="https://www.comingsoon.net/assets/uploads/2021/01/Shang-Chi-1280x720.jpg"
                  title="Shang-Chi"
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    <h2>Shang-Chi</h2>
                    Shang-Chi and the Ten Rings has been delayed due to the director getting tested for Covid-19
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
