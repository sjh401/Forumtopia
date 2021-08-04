import MobileNav from "../MobileNav/MobileNav"
import Footer from "../Footer/Footer"
import MainNavBar from "../Nav/MainNavBar"

const Layout = (props) => (
  <div>
    <MainNavBar user={props.user} />
    <MobileNav/>
    <div>{props.children}</div>
    <Footer />
  </div>
)

export default Layout