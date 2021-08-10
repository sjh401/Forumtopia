import React, { useState, useEffect } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import Layout from '../../components/Layout/Layout';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { deletePost, getPost } from '../../services/post';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    paddingBottom: 50,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));


export default function PostCard(props) {
  const [post, setPost] = useState([]);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchPost = async () => {
      const soloPost = await getPost(id);
      setPost(soloPost);
      console.log(soloPost)
    }
    fetchPost();
  }, [id]);

  const deleteThisPost = async () => {
    await deletePost(post._id)
    history.go()
  }

  const classes = useStyles();
  console.log(props.user)
  if (!post) {
    return "Loading..."
  }

  return (
    <Layout user={props.user} >
      <div className="thread-card-container">
        <Card className={classes.root}>
          <CardHeader
            title={post.title}
            subheader={`${props.user?.id} | ${post.createdAt?.substr(0, 10)}`}
          />
          {post.imgUrl && <CardMedia
            className={classes.media}
            image={`${post.imgUrl}`}
            title={post.imgUrl}
          />}
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="div">
              {post.body}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="div">
              <Link to={`/threads/${post?.threadId}`} className="edit-thread-post-link">Back</Link>
              {(post?.userId?._id === props.user?.id || post?.userId === props.user?.id) &&
                <>
                  <Link to={`/posts-edit/${post._id}`} variant="body2" className="edit-thread-post-link"> | Edit | </Link>
                  <Link to={`/threads/${post?.threadId}`} className="edit-thread-post-link" onClick={deleteThisPost} >Delete</Link>
                </>
              }
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
    </Layout>
  );
}

