// import Home from '../components/Home'

import Contact from '../components/Contact'
import About from '../components/About'
import Search from '../components/photogalery/Search'
import PhotoGallery from '../components/photogalery/PhotoGallery'
import PhotoDetail from '../components/photogalery/PhotoDetail'
import NotFound from '../components/base/NotFound'

const links = [
    { link: "/", title: "Photo Gallery", component: PhotoGallery, isExact: true, islink: false },
    { link: "/about", title: "About", component: About, isExact: false, islink: true },
    { link: "/contact", title: "Contact", component: Contact, isExact: false, islink: true },
    { link: "/search", title: "Search", component: Search, isExact: true, islink: false },
    { link: "/search/:query", title:"Search", component: Search , isExact:true, isLink:false},
    { link: "/search/detail/:photoID", title:"Search", component: PhotoDetail , isExact:false, isLink:false},
    { link: "/404", title: "404", component: NotFound, isExact: false, islink: false }

]

export default links