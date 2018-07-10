import { observable, computed, autorun } from 'mobx'

import { Todo } from './type'

class Store {
	@observable todos:Todo[] = [];
    @observable pendingRequests = 0;

    constructor() {
        autorun(() => console.log(this.report));
    }

	@computed get completedTodosCount() {
    	return this.todos.filter(
			todo => todo.completed === true
		).length;
    }

	@computed get report() {
		if (this.todos.length === 0)
			return "<none>";
		return `Next todo: "${this.todos[0].task}". ` +
			`Progress: ${this.completedTodosCount}/${this.todos.length}`;
	}

	addTodo(task: string) {
		this.todos.push({
			task: task,
			completed: false,
			assignee: null
		});
	}
}


const store =  new Store()

export {
	store,
	Store,
}

