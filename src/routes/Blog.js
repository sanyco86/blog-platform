import Main from '../components/layouts/Main/index'
import BlogPage from '../containers/BlogPage'
import Post from '../components/Post'
import AboutUs from '../components/AboutUs'
import { postsPath } from '../helpers/routes/index'

const Index = {
  path: '/',
  component: BlogPage
};

const About = {
  path: '/about',
  component: AboutUs
};

const PostRoute = {
  path: postsPath(),
  component: Post
};

export default {
  component: Main,
  childRoutes: [
    Index,
    About,
    PostRoute
  ]
}
