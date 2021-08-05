import MobileNav from "../MobileNav/MobileNav"
import Footer from "../Footer/Footer"
import MainNavBar from "../Nav/MainNavBar"
import "./Layout.css"

const Layout = (props) => (
  <div>
    <MainNavBar user={props.user} />
    <MobileNav />
    <div className="main-content">{props.children}</div>
    <Footer />
  </div>
)

export default Layout