import React, { PropTypes } from 'react'
import { Container } from 'semantic-ui-react'
import Header from './Header'
import Footer from './Footer'

const MainLayout = ({children}) => (
  <Container>
    <Header />
    {children}
    <Footer />
  </Container>
);

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout
