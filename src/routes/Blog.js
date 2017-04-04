import MainLayout from 'components/layouts/MainLayout'
import AboutPage from 'components/pages/AboutPage'
import ContactPage from 'components/pages/ContactPage'
import PostEdit from 'forms/post/edit'
import BlogPageContainer from 'containers/BlogPageContainer'
import PostPageContainer from 'containers/PostPageContainer'
import initialLoad from 'helpers/initialLoad'
import { postPath, aboutPath, contactPath, editPostPath } from 'helpers/routes'
import { fetchPosts } from 'actions/Posts'
import { fetchPost, receivePost } from 'actions/Post'
import { get } from 'lodash/object'
import { find } from 'lodash/collection'

const IndexRoute = {
  path: '/',
  component: BlogPageContainer,
  prepareData: (store) => {
    if (initialLoad()) return;
    if (get(store.getState(), 'posts.items', []).length === 0) {
      return store.dispatch(fetchPosts());
    }
  }
};

const AboutRoute = {
  path: aboutPath(),
  component: AboutPage
};

const ContactRoute = {
  path: contactPath(),
  component: ContactPage
};

const EditPostRoute = {
  path: editPostPath(),
  component: PostEdit,
  prepareData: (store, query, params) => {
    if (initialLoad()) return;
    return store.dispatch(fetchPost(params.id));
  }
};

const PostRoute = {
  path: postPath(),
  component: PostPageContainer,
  prepareData: (store, query, params) => {
    const items = get(store.getState(), 'posts.items', false);
    const item = items && find(items, { id: +params.id });

    if (item) {
      return store.dispatch(receivePost(item));
    } else {
      return store.dispatch(fetchPost(params.id));
    }
  }
};

export default {
  component: MainLayout,
  childRoutes: [
    IndexRoute,
    PostRoute,
    EditPostRoute,
    AboutRoute,
    ContactRoute
  ]
}
