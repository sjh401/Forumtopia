import Layout from '../../components/Layout/Layout'
import "./Home.css"
// import ThreadCard from './ThreadCard'
// import { verify } from "../../services/user"



// export default function HomeScreen(props) {
//   const [threads, setThreads] = useState([])
//   const [user, setUser] = useState(null)

//   useEffect(() => {
//     const verifyUser = async () => {
//       setUser(await verify())
//     }
//     verifyUser()
//   }, [])

//   useEffect(() => {
//     const fetchThreads = async () => {
//       let data = await getThreads();
//       setThreads(data)
//     }
//     fetchThreads()
//   }, [])


//   return (
//     <Layout>
//       <h1 className="trend-text">Trending Now</h1>
//       <div className="trending-now-container">
//         <div className="first-image">
//           <h4>Elon Musk's SpaceX launches 143 satellites on single rocket, sets world record.</h4>
//         </div>
//         <div className="second-image">
//           <h4>Scarlett Johansson sues Disney for breach of contract.</h4>
//         </div>
//         <div className="third-image">
//           <h4>Activision hit with another lawsuit as female employees are in a frenzy.</h4>
//         </div>
//         <div className="fourth-image">
//           <h4>EA play show Dead Space. Could this be EA's big comeback?</h4>
//         </div>
//       </div>
//       <div className="threads-home">
//         {threads.map((thread) => {
//           return <ThreadCard key={thread._id} thread={thread} user={user} />
//         })}
//       </div>
//     </Layout>

//   )
// }

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import homeData from "./homeData"

// console.log(homeData)

const useStyles = makeStyles({
  root: {
    width: 245,
    height: 245,
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <Layout user={props.user}>
      <h2 className="trending-text">Trending Today</h2>
      <div className="main-card-container">
        {homeData.map((data, index) => {
          return (
            <div className="trend-card-container" key={index}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={data.imageUrl}
                  />
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {data.text}
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

