import MainLayout from 'components/layouts/MainLayout'
import AboutPage from 'components/pages/AboutPage'
import BlogPageContainer from 'containers/BlogPageContainer'
import PostPageContainer from 'containers/PostPageContainer'
import { postPath, aboutPath } from 'helpers/routes'
import { fetchPosts } from 'actions/Posts'
import { fetchPost, receivePost } from 'actions/Post'
import { get } from 'lodash/object'
import { find } from 'lodash/collection'

const IndexRoute = {
  path: '/',
  component: BlogPageContainer,
  prepareData: (store) => {
    if (get(store.getState(), 'posts.items', []).length == 0) {
      store.dispatch(fetchPosts());
    }
  }
};

const AboutRoute = {
  path: aboutPath(),
  component: AboutPage
};

const PostRoute = {
  path: postPath(),
  component: PostPageContainer,
  prepareData: (store, query, params) => {
    const items = get(store.getState(), 'posts.items', false);
    const item = items && find(items, { id: +params.id });

    if (item) {
      store.dispatch(receivePost(item));
    } else {
      store.dispatch(fetchPost(params.id));
    }
  }
};

export default {
  component: MainLayout,
  childRoutes: [
    IndexRoute,
    AboutRoute,
    PostRoute
  ]
}
