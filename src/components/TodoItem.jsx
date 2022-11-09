import React, { PureComponent } from 'react';

class TodoItem extends PureComponent {
  render() {
    const { todo, handleChangeProps } = this.props;
    return (
      <li>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleChangeProps(todo.id)}
        />
        {todo.title}
      </li>
    );
  }
}

export default TodoItem;
