import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { deleteThread } from '../services/thread'
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    width: 600,
    // height: 300,
    marginTop: 10,
    backgroundColor: "whiteSmoke",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function SingleThreadCard({ post, user }) {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          title={post[0].threadId.title}
          subheader={`${(post[0]?.userId.username)} | ${(post[0]?.threadId.createdAt).substr(0, 10)}`}
        />
        {post[0]?.threadId.imgUrl &&
          <CardMedia
            className={classes.media}
            image={post[0].threadId.imgUrl}
            title={post[0].threadId.title}
          />}
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {post[0].threadId.body}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          {user?.id === post[0].threadId.userId &&
            <>
              <button className="card-button" onClick={() => deleteThread(post[0].threadId._id)}>DELETE</button>
              <Link to={`/threads/${post[0].threadId._id}`}><button className="card-button">EDIT</button></Link>
            </>
          }
        </CardActions>
      </Card>
    </div>

  );
}
