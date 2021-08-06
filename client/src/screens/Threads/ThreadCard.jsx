import React,{ useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Layout from '../../components/Layout/Layout';
import { getThread } from '../../services/thread';

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
import { getPosts } from '../../services/post';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ThreadCard(props) {
  const [thread, setThread] = useState([]);
  const [ posts, setPosts ] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchThread = async () => {
      const thread = await getThread(id);
      console.log(thread)
      setThread(thread);
    }
    fetchThread();
  }, [id]);
  
  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      console.log(posts);
      setPosts(posts)
    }
    fetchPosts()
  },[thread,id])
  console.log(posts)
  const classes = useStyles();

  return (
    <Layout >
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={thread.title}
          subheader={thread.createdAt}
        />
        <CardMedia
          className={classes.media}
          image={thread.imgUrl}
          title={thread.imgUrl}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="div">
            {thread.body} 
            <Link to={(thread.userId?._id === props.user?.id)? `/thread-edit/${thread._id}`: `/thread/${thread._id}`} variant="body2"> Edit</Link>
            <Link to={`/threads/${id}/posts`}>Create Post</Link>
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {posts.map(post => (
              <div key={posts._id}>
                <h6>{post.title}</h6>
                <p>{post.body}</p>
              </div>
            ))}
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
    </Layout>
  );
}

