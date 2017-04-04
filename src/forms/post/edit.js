import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import PostEditPage from 'components/pages/PostEditPage'
import { updatePost } from 'actions/Post'

const validate = (values) => {
  const errors = {};

  if(values.title.length === 0)
    errors.title = 'Title cant be blank';

  return errors;
};

const warn = (values) => {
  const warnings = {};

  if(values.title.length < 5)
    warnings.title = 'Title length must be < 5';

  return warnings;
};

export default connect(
  (state) => ({
    initialValues: {
      id:     state.post.item.id,
      title:  state.post.item.title,
      text:   state.post.item.text,
      author: state.post.item.meta.author
    }
  }),
  (dispatch) => ({
    updatePost: (values) => dispatch(updatePost(values))
  })
)(reduxForm({
  form: 'editPost',
  validate,
  warn,
  onSubmit: (values) => updatePost(values)
})(PostEditPage))
