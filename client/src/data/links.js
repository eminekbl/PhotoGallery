// import Home from '../components/Home'

import Contact from '../components/Contact'
import About from '../components/About'
import Search from '../components/photogalery/Search'
import PhotoGallery from '../components/photogalery/PhotoGallery'
import PhotoDetail from '../components/photogalery/PhotoDetail'
import NotFound from '../components/base/NotFound'
import Login from '../components/Login'
import Signup from '../components/Signup'
import FotgotPassword from '../components/FotgotPassword'
import ResetPassword from '../components/ResetPassword'

const links = [
    { link: "/", title: "Photo Gallery", component: PhotoGallery, isExact: true, islink: false },
    { link: "/about", title: "About", component: About, isExact: false, islink: true },
    { link: "/contact", title: "Contact", component: Contact, isExact: false, islink: true },
    { link: "/search", title: "Search", component: Search, isExact: true, islink: false },
    { link: "/search/:query", title: "Search", component: Search, isExact: true, isLink: false },
    { link: "/search/detail/:photoID", title: "Search", component: PhotoDetail, isExact: false, isLink: false },
    { link: "/login", title: "Login", component: Login, isExact: true, islink: false },
    { link: "/signup", title: "SignUp", component: Signup, isExact: true, islink: false },
    { link: "/forgotpassword", title: "FotgotPassword", component: FotgotPassword, isExact: true, islink: false },
    { link: "/resetpassword/:resetToken", title: "ResetPassword", component: ResetPassword, isExact: true, islink: false },
    { link: "/404", title: "404", component: NotFound, isExact: false, islink: false }

]

export default links