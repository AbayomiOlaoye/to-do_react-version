/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import TodoItem from './TodoItem';

class TodosList extends PureComponent {
  render() {
    const {
      todos,
      handleChangeProps,
      deleteTodoProps,
      setUpdate,
    } = this.props;

    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={handleChangeProps}
            deleteTodoProps={deleteTodoProps}
            setUpdate={setUpdate}
          />
        ))}
      </ul>
    );
  }
}

// TodosList.propTypes = {
//   todos: PropTypes.node.isRequired,
//   handleChangeProps: PropTypes.func.isRequired,
//   deleteTodoProps: PropTypes.func.isRequired
// };

export default TodosList;
