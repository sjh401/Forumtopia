import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { deletePost } from '../services/post'
import { Link } from "react-router-dom"
import Loading from './Loading';

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

export default function PostCard({ setToggle, post, user }) {
  const classes = useStyles();

  if (!post) {
    return <Loading />
  }

  const handleClick = async () => {
    await deletePost(post._id)
    setToggle(prevToggle => !prevToggle)
  }

  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          subheader={`${(post.userId.username)} | ${(post.createdAt).substr(0, 10)}`}
        />
        {post.imgUrl &&
          <CardMedia
            className={classes.media}
            image={post.imgUrl}
            title={post.title}
          />}
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.body}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          {user?.id === post.userId._id &&
            <>
              <button className="card-button" onClick={handleClick}>DELETE</button>
              <Link to={`/posts/${post._id}`}><button className="card-button">EDIT</button></Link>
            </>
          }
        </CardActions>
      </Card>
    </div>
  );
}
