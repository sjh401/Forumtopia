import MobileNav from "../MobileNav/MobileNav"
import Footer from "../Footer/Footer"
import Navbar from "../Nav/Navbar"

const Layout = (props) => (
  <div>
    <Navbar className="main" user={props.user} />
    <MobileNav user={props.user} />
    <div>{props.children}</div>
    <Footer />
  </div>
)

export default Layout