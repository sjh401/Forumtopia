import MobileNav from "../MobileNav/MobileNav"
import Footer from "../Footer/Footer"
import MainNavBar from "../Nav/MainNavBar"
import "./Layout.css"

const Layout = (props) => (
  <div>
    <MainNavBar className="main" user={props.user} />
    <MobileNav />
    <div>{props.children}</div>
    <Footer />
  </div>
)

export default Layout