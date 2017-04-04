import React from 'react'
import { Field } from 'redux-form'
import Helmet from 'react-helmet'
import renderField from 'components/elements/RenderField'
import { Segment } from 'semantic-ui-react'

const PostEditPage = ({ handleSubmit, pristine, submitting, reset }) => (
  <div>
    <Segment>
      <h2>Post Edit</h2>
      <form onSubmit={handleSubmit} className="ui form">
        <Field label="Title" component={renderField} type="text" name="title" id="title" />
        <Field label="Text" component={renderField} name="text" id="text" />
        <Field label="Author" component={renderField} type="text" name="author" id="author" />
        {(!pristine && !submitting) && <button  className="ui button yellow" onClick={reset}>Clear</button>}
        <input type="submit" className="ui button primary" value="Update"/>
      </form>
    </Segment>
    <Helmet title="Post Edit"/>
  </div>
);
export default PostEditPage;
