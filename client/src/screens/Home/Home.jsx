import Layout from '../../components/Layout/Layout'
import "./Home.css"
// import { verify } from "../../services/user"
import { useState, useEffect } from 'react'
// import CardHeader from '@material-ui/core/CardHeader';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';
import { getCategories } from '../../services/category'
import { Link } from 'react-router-dom';
import ThreadMapping from '../../components/Mapping/ThreadMapping';
import TrendingCategories from '../../components/HomeComponents/TrendingCategories';
import UserTab from '../../components/HomeComponents/UserTab';



// const useStyles = makeStyles({
//   root: {
//     width: 245,
//     height: 245,
//   },
// });


export default function Home(props) {
  const [categories, setCategories] = useState([])
  const { user } = props

  useEffect(() => {
    const fetchCategories = async () => {
      let data = await getCategories();
      setCategories(data)
    }
    fetchCategories()
  }, [])

  // const classes = useStyles();


  if (!categories) {
    return "Loading..."
  }

  const CATEGORIES = categories?.sort((a, b) => b?.threadId.length - a?.threadId.length).filter(category => category.threadId.length > 0).map((category, index) => {
    return (
        <Link to={`/threads/${category.threadId[0]?._id}`} key={index} style={{textDecoration:"none", color:"#1c1c1c"}}>
          <div className="thread-card-containers" style={{backgroundImage:`url(${category.threadId[0]?.imgUrl})`}}>
            <div className="thread-category-text">
              {category.threadId[0].title}
            </div>
          </div>
        </Link>
    )
  })

  return (
    <Layout user={user}>
      <h2 className="trending-text">Trending Today</h2>
      <div className="thread-categories">
        {CATEGORIES}
      </div>
      <div className="home-grid">
        <div className="home-grid-left">
          <ThreadMapping user={user} />
        </div>
        <div className="home-grid-right">
          <TrendingCategories categories={categories}/>
          <UserTab user={user} categories={categories}/>
        </div>
      </div>
    </Layout>
  );
}

