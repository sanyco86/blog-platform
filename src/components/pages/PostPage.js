import React, { PropTypes } from 'react'
import Helmet from 'react-helmet'
import { Item } from 'semantic-ui-react'
import BlogItem from 'components/widgets/BlogItem'
import Loader from 'components/widgets/Loader'

const PostPage = ({item, isRequesting}) => (
  <div>
    <Loader loading={isRequesting}>
      <Item.Group>
        { item && <BlogItem item={item} /> }
        {
          item && <Helmet title={item.title} meta={
            [
              {name: "description", content: "iSolution Blog Platform"},
              {name: "keywords", content: item.title}
            ]
          }
          /> }
      </Item.Group>
    </Loader>
  </div>
);

PostPage.propTypes = {
  item: PropTypes.object,
  isRequesting: PropTypes.bool,
  error: PropTypes.bool,
};

export default PostPage
