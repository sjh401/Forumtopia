import MobileNav from "../MobileNav/MobileNav"
import Footer from "../Footer/Footer"
import MainNavBar from "../Nav/MainNavBar"
import "./Layout.css"

const Layout = (props) => (
  <div className="layout-body">
    <MainNavBar className="main" user={props.user} />
    <MobileNav user={props.user} />
    <div className="main-content">{props.children}</div>
    <Footer />
  </div>
)

export default Layout