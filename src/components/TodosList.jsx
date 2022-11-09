import React, { PureComponent } from 'react';
import TodoItem from './TodoItem';

class TodosList extends PureComponent {
  render() {
    const { todos, handleChangeProps } = this.props;
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={handleChangeProps}
          />
        ))}
      </ul>
    );
  }
}

// TodosList.propTypes = { todos: PropTypes.node.isRequired };

export default TodosList;
