import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Layout from '../../components/Layout/Layout';
import { getPosts } from '../../services/post';
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
import "./Post.css"

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
  const [posts, setPosts] = useState([]);
  const { id } = useParams();
  console.log(id)

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts(id);
      console.log(data[18]?.threadId._id)
      setPosts(data);
    }
    fetchPosts();
  }, [id]);

  const displayEditLink = () => {
    if (posts.userId === props.user?.id) {
      return <Link to={`/thread-edit/${posts._id}`}  className="edit-thread-post-link">Edit</Link>
    }
  }

  const classes = useStyles();

  return (
    <div className="post-card-container">
      {posts.map((post) => {
        // console.log(post.threadId?._id === id)
        // post.threadId?._id === id &&
        return (

          post.threadId?._id === id &&


          <div className="thread-card">
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="username" className={classes.avatar}>
                    {post.userId?.username}
                    a
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={post.title}
                subheader={post.createdAt}
              />
              {post.imgUrl && (<CardMedia
                className={classes.media}
                image={post.imgUrl}
              />)}

              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {post.body}
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
        )
      })}
    </div>
  );
}

