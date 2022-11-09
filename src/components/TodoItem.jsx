import React, { PureComponent } from 'react';

class TodoItem extends PureComponent {
  render() {
    const { todo } = this.props;
    return <li>{todo.title}</li>;
  }
}

export default TodoItem;
