import React, { PropTypes } from 'react'

const TextBox = ({children}) => (
  <p>{children}</p>
);

TextBox.propTypes = {
  children: PropTypes.string
};

export default TextBox
