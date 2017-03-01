import Main from '../components/layouts/Main/index'
import Posts from '../containers/Posts'
import Post from '../containers/Post'
import AboutUs from '../components/AboutUs'
import { postPath } from '../helpers/routes/index'
import { fetchPosts } from '../actions/Posts'
import { fetchPost } from '../actions/Post'

const Index = {
  path: '/',
  component: Posts,
  prepareData: (store) => {
    store.dispatch(fetchPosts())
  }
};

const About = {
  path: '/about',
  component: AboutUs
};

const PostRoute = {
  path: postPath(),
  component: Post,
  prepareData: (store, query, params) => {
    store.dispatch(fetchPost(params.id))
  }
};

export default {
  component: Main,
  childRoutes: [
    Index,
    About,
    PostRoute
  ]
}
