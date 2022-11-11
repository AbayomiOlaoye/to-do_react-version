/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import styles from './TodoItem.module.css';

class TodoItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    });
  }

  handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      this.setState({ editing: false });
    }
  };

  render() {
    const {
      todo,
      handleChangeProps,
      deleteTodoProps,
      setUpdate,
    } = this.props;

    const { editing } = this.state;

    const viewMode = {};
    const editMode = {};

    if (editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };

    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={todo.completed}
            onChange={() => handleChangeProps(todo.id)}
          />
          <button type="button" onClick={() => deleteTodoProps(todo.id)}>
            Delete
          </button>
          <span style={todo.completed ? completedStyle : null}>
            {todo.title}
          </span>
        </div>
        <li className={styles.item}>
          <input
            type="text"
            className={styles.textInput}
            style={editMode}
            value={todo.title}
            onChange={(e) => {
              setUpdate(e.target.value, todo.id);
            }}
            onKeyDown={this.handleUpdatedDone}
          />
        </li>
      </li>
    );
  }
}

export default TodoItem;
