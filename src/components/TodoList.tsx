import { observer, propTypes } from 'mobx-react'
import * as React from 'react'
import { Store } from '../store'
import { TodoView } from './TodoView';

interface TodoListProps { store: Store }

@observer
export class TodoList extends React.Component<TodoListProps> {
  render() {
    const store = this.props.store;
    return (
      <div>
        { store.report }
        <ul>
        { store.todos.map(
          (todo, idx) => <TodoView todo={ todo } key={ idx } />
        ) }
        </ul>
        { store.pendingRequests > 0 ? <h1>Loading...</h1> : null }
        <button onClick={ this.onNewTodo }>New Todo</button>
        <small> (double-click a todo to edit)</small>
      </div>
    );
  }

  onNewTodo = () => {
    this.props.store.addTodo(prompt('Enter a new todo:','coffee plz'));
  }
}
