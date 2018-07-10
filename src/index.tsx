import * as React from "react";
import * as ReactDOM from "react-dom";

import { TodoList } from "./components/TodoList";
import { store } from './store'

ReactDOM.render(
    <TodoList store={ store } />,
    document.getElementById("example")
);