import MobileNav from "../MobileNav/MobileNav"
import Footer from "../Footer/Footer"
import MainNavBar from "../Nav/MainNavBar"

const Layout = (props) => (
  <>
    <MainNavBar user={props.user} />
    <MobileNav />
    <div className="main-content">{props.children}</div>
    <Footer />
  </>
)

export default Layout