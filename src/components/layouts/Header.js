import React from 'react'
import { Menu } from 'semantic-ui-react'
import Link from 'components/elements/Link'
import { aboutPath } from 'helpers/routes'

const Header = () => (
  <Menu>
    <Menu.Item name='iSolution' as={Link} to='/' />
    <Menu.Menu position='right'>
      <Menu.Item name='HOME' as={Link} to='/' />
      <Menu.Item name='ABOUT' as={Link} to={aboutPath} />
    </Menu.Menu>
  </Menu>
);

export default Header
