import React, { Component } from 'react'
import Link from './Link'
import classNames from 'classnames'

class NavLink extends Component {
  render() {
    const isActive = this.context.router.isActive(this.props.to, true);

    return (
      <li className={classNames({ active: isActive })}>
        <Link {...this.props}/>
      </li>
    );
  }
}

NavLink.contextTypes = {
  router: React.PropTypes.object
};

export default NavLink;
