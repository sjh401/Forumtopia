import React, { useEffect, useState } from 'react'
// import { Link } from "react-router-dom"
import Layout from "../../components/Layout/Layout"
import { getCategories, getCategory } from '../../services/category';
import { getThreads } from '../../services/thread';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';

import CardActionArea from '@material-ui/core/CardActionArea';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles((theme) => ({
  root: {
    width: 200,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Categories(props) {
  const [ categories, setCategories ] = useState([]);
  const [ category, setCategory ] = useState("");
  const [ threads, setThreads ] = useState([]);
  
  useEffect(() => {
    const fetchCategories = async () => {
      const get = await getCategories();
      console.log(get)
      setCategories(get);
    }
    fetchCategories();
  },[])

  useEffect(() => {
    const fetchThreads = async () => {
      const get = await getCategory(category._id)
      console.log(category._id)
      console.log(get)
      setThreads(get.threadId)
    }
    fetchThreads()
  },[category])

  console.log(category)
  console.log(threads)

  const classes = useStyles();

  return (
    <Layout user={props.user}>
      <div className="categories-selections">
        {categories.map(category => (
          <div key={category._id} className="category-selection">
            <img src={category.imgUrl} alt="category" style={{width:"100px"}}/>
            <button onClick={(e) => setCategory(category)}>{category.title}</button>
          </div>
        ))}
      </div>
      {threads.map(thread => {
          return (
            <div className="trend-card-container" key={thread._id}>
              <CardHeader
                avatar={
                  <Avatar aria-label="username" className={classes.avatar}>
                    {thread.userId.username}
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
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={thread.imgUrl}
                  />
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {thread.body}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          )
        })}
    </Layout>
  )
}
