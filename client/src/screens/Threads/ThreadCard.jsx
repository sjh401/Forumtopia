import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Layout from '../../components/Layout/Layout';
import { getThread } from '../../services/thread';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CreatePost from '../Posts/CreatePost';
import PostMapping from '../../components/Mapping/PostMapping';
import "../../App.css"

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    height: 700,
    paddingBottom: 50,
    overflow: "scroll",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export default function ThreadCard(props) {
  const [thread, setThread] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchThread = async () => {
      const thread = await getThread(id);
      setThread(thread);
    }
    fetchThread();
  }, [id]);

  const classes = useStyles();

  if (!thread) {
    return "Loading..."
  }
  console.log(props.user)
  return (
    <Layout user={props.user} >
      <div className="thread-card-container">
        <Card className={classes.root}>
          <CardHeader
            title={thread.title}
            subheader={`${thread?.userId?.username} | ${thread.createdAt?.substr(0, 10)}`}
          />
          {thread.imgUrl && <CardMedia
            className={classes.media}
            // needed this to get rid of a warning
            image={`${thread.imgUrl}`}
            title={thread.imgUrl}
          />}
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="div">
              {thread.body}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="div">
              {thread.userId?._id === props.user?.id &&
                <>
                  <Link to={`/threads-edit/${thread._id}`} variant="body2" className="edit-thread-post-link">Edit </Link>
                  <Link to={`/threads-delete/${thread._id}`} variant="body2" className="edit-thread-post-link">| Delete</Link>
                </>
              }
            </Typography>
          </CardContent>
          <CardContent>
          <Typography variant="body2" color="textSecondary" component="div">
            {props.user && <CreatePost user={props.user} />}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div">
            <PostMapping id={id} thread={thread} user={props.user} />
          </Typography>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}

