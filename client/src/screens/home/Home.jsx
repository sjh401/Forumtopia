import Layout from '../../components/Layout/Layout'
import "./Home.css"
import { verify } from "../../services/user"
import { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import homeData from "./homeData"
import { getCategories } from '../../services/category'
import { Link } from 'react-router-dom';

// console.log(homeData)

const useStyles = makeStyles({
  root: {
    width: 245,
    height: 245,
  },
});

export default function ImgMediaCard(props) {
  const [categories, setCategories] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {
    const verifyUser = async () => {
      setUser(await verify())
    }
    verifyUser()
  }, [])

  useEffect(() => {
    const fetchCategories = async () => {
      let data = await getCategories();
      console.log(data)
      setCategories(data)
    }
    fetchCategories()
  }, [user])

  const classes = useStyles();

  return (
    <Layout user={props.user}>
      <h2 className="trending-text">Trending Today</h2>
      <div className="main-card-container">
        {/* {categories.sort((a,b)=> b.threadId.length - a.threadId.length).filter(category => category.threadId.length >0).map((category, index) => { */}
        {categories.sort((a,b)=> b.updatedAt - a.updatedAt).filter(category => category.threadId.length >0).map((category, index) => {
          return (
            <div className="trend-card-container" key={index}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={category.threadId[0]?.imgUrl}
                  />
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="h2">
                    <Link to={`/threads/${category.threadId[0]?._id}`}>{category.threadId[0]?.title}</Link>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {category.threadId[0]?.body}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          )
        })}

      </div>
    </Layout>
  );
}

