import Nav from "../MobileNav/MainNavBar"
import Footer from "../Footer/Footer"

const Layout = (props) => (
  <div>
    <Nav user={props.user} />
    <div>{props.children}</div>
    <Footer />
  </div>
)

export default Layout