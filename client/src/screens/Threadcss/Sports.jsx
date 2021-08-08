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
import BannerSports from '../../components/Gamer/BannerSports';

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

export default function Sports(props) {
    const classes = useStyles();

    return (
      <Layout user={props.user}>
        <div>
          <BannerSports/>
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
                  image="https://images.daznservices.com/di/library/omnisport/ec/ae/lonzo-ball-101119-usnews-getty-ftr_6fykcgpn6s3m17a6ib4rrrr6e.jpg?t=-1078506035&quality=100&w=1280&h=720"
                  title="Miles Morales 10th Anniversary"
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    <h2>NBA</h2>
                    NBA opens investigations into Lonzo Ball, Kyle Lowry sign-and-trade deals, sources say
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
                    image="https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/packers/xuz8gwnjcojf9td6cyzy"
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
                    image="https://cdn.i-scmp.com/sites/default/files/styles/1280x720/public/d8/images/methode/2020/07/09/3554ab3e-c148-11ea-8c85-9f30eae6654e_image_hires_045255.jpg?itok=nL9MWE01"
                    title="Shang-Chi"
                  />
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                      <h2>UFC</h2>
                      Jose Aldo credits Navy boxing for UFC 265 win: ‘My hands are getting quicker and quicker’
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
