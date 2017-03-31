import React from 'react'
import Helmet from 'react-helmet'
import BlogList from 'components/widgets/BlogList'

const Index = ({ items }) => (
  <div>
    <BlogList items={items} />
    <Helmet title='Список постов' meta={ [{name: "description", content: "iSolution Blog Platform"}] }/>
  </div>
);

Index.propTypes = {
  items: BlogList.propTypes.items
};

export default Index
