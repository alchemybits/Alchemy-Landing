// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
// import ContentPaste from "@material-ui/icons/ContentPaste";
// core components/views
import mainPage from "views/App/mainPage/mainPage";

import BlogPostsPage from "views/BlogPostsPage/BlogPostsPage.jsx";
import SectionProjects from "views/SectionsPage/Sections/SectionProjects.jsx";
import SectionBlogs from "views/SectionsPage/Sections/SectionBlogs.jsx";
import ContactUsPage from "views/ContactUsPage/ContactUsPage.jsx";
import Login from "views/Login/Login";
import SignOut from "components/SignOut/SignOut";
import AddProduct from "views/AddProduct/AddProduct";
import LandingPage from "views/LandingPage/LandingPage";
import * as firebase from "firebase";

const pageRoutesNL = [
  // {
  //   path: "/Noticias",
  //   sidebarName: "Noticias",
  //   navbarName: "Noticias",
  //   icon: Dashboard,
  //   component: SectionProjects
  // },
  // {
  //   path: "/Peliculas",
  //   sidebarName: "BlogPostsPage",
  //   navbarName: "BlogPostsPage",
  //   icon: Dashboard,
  //   component: BlogPostsPage
  // },

  // {
  //   path: "/Login",
  //   sidebarName: "Login",
  //   navbarName: "Login",
  //   icon: Dashboard,
  //   component: Login
  // },
  // {
  //   path: "/Blog",
  //   sidebarName: "SectionBlogs",
  //   navbarName: "SectionBlogs",
  //   icon: Dashboard,
  //   component: SectionBlogs
  // },
  // { path: "/contactanos", name: "ContactUsPage", component: ContactUsPage },
  { path: "/", component: LandingPage, navbarName: "Redirect" }
];

const pageRoutes = [
  {
    path: "/Noticias",
    sidebarName: "Noticias",
    navbarName: "Noticias",
    icon: Dashboard,
    component: SectionProjects
  },
  {
    path: "/Peliculas",
    sidebarName: "BlogPostsPage",
    navbarName: "BlogPostsPage",
    icon: Dashboard,
    component: BlogPostsPage
  },

  {
    path: "/Login",
    sidebarName: "Login",
    navbarName: "Login",
    icon: Dashboard,
    component: Login
  },
  {
    path: "/Blog",
    sidebarName: "SectionBlogs",
    navbarName: "SectionBlogs",
    icon: Dashboard,
    component: SectionBlogs
  },
  {
    path: "/SignOut",
    sidebarName: "SignOut",
    navbarName: "SignOut",
    icon: Dashboard,
    component: SignOut
  },
  {
    path: "/Admin",
    sidebarName: "Admin",
    navbarName: "Admin",
    icon: Dashboard,
    component: AddProduct
  },
  { path: "/contactanos", name: "ContactUsPage", component: ContactUsPage },
  { path: "/", component: mainPage, navbarName: "Redirect" }
];

let routes = [];
// firebase.auth().onAuthStateChanged(user => {
//   if (!user) routes = pageRoutesNL;
//   else routes = pageRoutes;
// });
routes = pageRoutesNL;

export default routes;
