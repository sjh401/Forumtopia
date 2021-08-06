import Layout from '../../components/Layout/Layout'
import "./Home.css"
import Thread from "../Threadcss/Thread"
import ThreadMapping from '../../components/Mapping/ThreadMapping'



export default function Home(props) {
  console.log(props.user)
  return (
    <Layout user={props.user}>
      <div>
        <h1 className="trend">Trending Now</h1>
        <div className="together">
          <div className="first">
            <div className="move">
              <h3>They Elon Musk's SpaceX launches 143 satellites on single rocket, sets world record.</h3>
            </div>
          </div>
          <div className="second">
            <h3>scarlett johansson sues Disney for breach of contract</h3>
          </div>
          <div className="third">
            <h3>Activision hit with another lawsuit as female employees are in a frenzy.</h3>
          </div>
          <div className="fourth">
            <h3>EA play show Dead Space. Could this be EA's big comeback</h3>
          </div>
        </div>
        <span className="spans"></span>
        <ThreadMapping user={props.user} />
        <Thread />
      </div>
    </Layout>
  )
}
