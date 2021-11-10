import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Layout from "../../components/Layout/Layout"
import { getCategories } from '../../services/category';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { getThreadsUsers } from '../../services/thread';


const useStyles = makeStyles((theme) => ({
  root: {
    width: 400,
    height: 400,
    paddingBottom: 50,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export default function Categories(props) {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState({ _id: "6110110df23e1a41bb049c8b" });
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const get = await getCategories();
      setCategories(get);
    }
    fetchCategories();
  }, [])

  useEffect(() => {
    const fetchThreads = async () => {
      const get = await getThreadsUsers(category._id)
      setThreads(get)
    }
    fetchThreads()
  }, [category])

  const classes = useStyles();

  // console.log(categories)
  if (!categories) {
    return "Loading..."
  }

  return (
    <Layout user={props.user}>
      <h1 className="categories-selections">Categories</h1>
      <div className="categories-selections">
        {categories.map(category => (
          <div key={category._id} className="category-selection" onClick={(e) => setCategory(category)}>
            <h2>{category.title}</h2>
            <img src={category.imgUrl} alt="category" style={{ height: "200px", borderRadius: ".5em" }} />
          </div>
        ))}
      </div>
      {category._id !== "6110110df23e1a41bb049c8b" && <h5 className="categories-selections">Threads by Category</h5>}
      <div className="category-trend-card-container">
        {threads.filter(thread => category._id === thread?.categoryId).map(thread => {
          return (
            <Link to={`/threads/${thread._id}`} key={thread._id} style={{textDecoration:"none"}}>
              <div className="trend-card-container">
                <Card className={classes.root}>
                  <CardHeader
                    title={thread.title.toUpperCase()}
                    subheader={`${thread?.userId?.username} | ${thread.createdAt.substr(0, 10)}`}
                  />
                  {thread.imgUrl && <CardMedia
                    component="img"
                    alt={thread.imgUrl}
                    height="200"
                    image={`${thread.imgUrl}`}
                  />}
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="div">
                      {thread.body}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}
