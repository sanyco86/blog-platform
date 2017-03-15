import React, { PropTypes } from 'react'
import { List } from 'semantic-ui-react'
import DateTime from 'components/elements/DateTime'
import Like from 'components/elements/Like'

const Meta = ({author, created, updated, likes}) => (
  <List>
    <List.Item>
      <List.Icon name='user' />
      <List.Content>{author}</List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='add to calendar' />
      <List.Content>
        <DateTime>{created}</DateTime>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='checked calendar' />
      <List.Content>
        <DateTime>{updated}</DateTime>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Content>
        <Like {...likes} />
      </List.Content>
    </List.Item>
  </List>
);

Meta.defaultProps = {
  likes: { count: 0 },
  author: '<unknown>',
  created: new Date(),
  updated: new Date()
};

Meta.propTypes = {
  likes: PropTypes.object,
  author: PropTypes.string,
  created: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  updated: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

export default Meta
