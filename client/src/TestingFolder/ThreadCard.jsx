import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { deleteThread } from '../services/thread'
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    width: 600,
    // height: 300,
    marginTop: 10,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export default function ThreadCard({ setToggle, thread, user }) {
  const classes = useStyles();

  if (!thread) {
    return "Loading..."
  }

  const handleClick = async () => {
    await deleteThread(thread._id)
    setToggle(prevToggle => !prevToggle)
  }

  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          title={<Link to={`/threads/${thread._id}/posts`}>{thread.title}</Link>}
          subheader={`${(thread.userId.username)} | ${(thread.createdAt).substr(0, 10)}`}
        />
        {thread.imgUrl &&
          <CardMedia
            className={classes.media}
            image={thread.imgUrl}
            title={thread.title}
          />}
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {thread.body}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          {user?.id === thread.userId._id &&
            <>

              <button className="card-button" onClick={handleClick}>DELETE</button>
              <Link to={`/threads/${thread._id}`}><button className="card-button">EDIT</button></Link>
            </>
          }
        </CardActions>
      </Card>
    </div>

  );
}
