import React, { useState, useEffect } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
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
import CreatePost from '../Posts/CreatePost';
import PostMapping from '../../components/Mapping/PostMapping';
import { deletePost, getPost } from '../../services/post';

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


export default function PostCard(props) {
    const [ post, setPost ] = useState([]);
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
      history.push(`/threads/${post?.threadId}`)

    }

    const classes = useStyles();

    return (
        <Layout user={props.user} >
        <div className="thread-card-container">
            <Card className={classes.root}>
            <CardHeader
                avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                    {/* nice? Link to userprofile?*/}
                    {post?.userId?.username?.charAt(0)}
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
            <CardMedia
                className={classes.media}
                image={post.imgUrl}
                title={post.imgUrl}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="div">
                {post.body}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="div">
                <Link to={`/threads/${post?.threadId}`} className="edit-thread-post-link">Back</Link>
                {post?.userId === props.user?.id &&
                  <>
                    <Link to={`/threads-edit/${post._id}`} variant="body2" className="edit-thread-post-link">| Edit |</Link>
                    <Link to={`/threads/${post?.threadId}`} className="edit-thread-post-link" onClick={deleteThisPost}>Delete</Link>
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

