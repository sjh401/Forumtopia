import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Layout from "../../components/Layout/Layout"
import { getCategories } from '../../services/category';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { getThreadsUsers } from '../../services/thread';


const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
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
  const [ category, setCategory ] = useState({_id: "6110110df23e1a41bb049c8b"});
  const [ threads, setThreads ] = useState([]);
  
  useEffect(() => {
    const fetchCategories = async () => {
      const get = await getCategories();
      setCategories(get);
    }
    fetchCategories();
  },[])

  useEffect(() => {
    const fetchThreads = async () => {
      const get = await getThreadsUsers(category._id)
      setThreads(get)
    }
    fetchThreads()
  },[category])

  const classes = useStyles();

  return (
    <Layout user={props.user}>
      <h1 className="categories-selections">Categories</h1>
      <div className="categories-selections">
        {categories.map(category => (
          <div key={category._id} className="category-selection" onClick={(e) => setCategory(category)}>
            <h2>{category.title}</h2>
            <img src={category.imgUrl} alt="category" style={{width:"100px"}}/>
          </div>
        ))}
      </div>
      {category._id !== "6110110df23e1a41bb049c8b" && <h5 className="categories-selections">Threads by Category</h5>}
      <div className="category-trend-card-container">
        {threads.filter(thread => category._id === thread?.categoryId).map(thread => {
            return (
              <Link to={`/threads/${thread._id}`}>
                <div className="trend-card-container" key={thread._id}>
                  <Card className={classes.root}>
                    <CardHeader
                      avatar={
                        <Avatar aria-label="username" className={classes.avatar}>
                          {thread?.userId?.username?.charAt(0)}
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
                    {/* <CardActionArea> / */}
                      <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="200"
                        image={`${thread.imgUrl}`}
                      />
                      <CardContent>
                        <Typography variant="body2" color="textSecondary" component="div">
                          {thread.body}
                        </Typography>
                      </CardContent>
                    {/* </CardActionArea> */}
                  </Card>
                </div>
              </Link>
            )
          })}
        </div>
    </Layout>
  )
}
