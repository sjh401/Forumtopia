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
import "./Topic.css"


const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    // height: 300,
    marginTop: 10,
    textAlign: "center"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export default function ThreadCard({ topic, user }) {
  const classes = useStyles();

  if (!topic) {
    return "Loading..."
  }

  return (
    <div className="individual-topic">
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={topic.imgUrl}
          title={topic.title}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <Link to={`/topics/${topic._id}/threads`}>{topic.title}</Link>
            <br />
            {topic.body}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
        </CardActions>
      </Card>
    </div>

  );
}
