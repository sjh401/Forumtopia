import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Layout from '../../components/Layout/Layout';
import { getThread } from '../../services/thread';
import "./Thread.css"
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
import Posts from "../Post/Posts"
import { verify } from "../../services/user"

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

export default function ThreadCard(props) {
  const [thread, setThread] = useState([]);
  const [user, setUser] = useState(null)

  useEffect(() => {
    const verifyUser = async () => {
      setUser(await verify())
    }
    verifyUser()
  }, [])
  const { id } = useParams();

  useEffect(() => {
    const fetchThread = async () => {
      const thread = await getThread(id);
      setThread(thread);
    }
    fetchThread();
  }, [id]);

  const displayEditLink = () => {
    if (thread.userId === props.user?.id) {
      return <Link to={`/thread-edit/${thread._id}`}  className="edit-thread-post-link">Edit</Link>
    }
  }

  const classes = useStyles();

  return (
    <Layout>
      <div className="thread-card">
        <Card className={classes.root}>
          <CardHeader
            className="testing"
            avatar={
              <Avatar aria-label="username" className={classes.avatar}>
                {thread.userId?.username[0]}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={thread.title.toUpperCase()}
            subheader={thread.createdAt}
          />
          {thread.imgUrl && (<CardMedia
            className={classes.media}
            image={thread.imgUrl}
            title={thread.imgUrl}
          />)}

          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {thread.body}
              {displayEditLink()}
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
      <Posts user={user} />
    </Layout>
  );
}

