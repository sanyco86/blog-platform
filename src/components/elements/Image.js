import React, { PropTypes } from 'react'
import { Item } from 'semantic-ui-react'

const Image = ({src}) => (
  <Item.Image size='medium' src={src} />
);

Image.propTypes = {
  src: PropTypes.string
};

export default Image
