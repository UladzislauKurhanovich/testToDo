import { useDispatch, useSelector } from 'react-redux';
import { AddTodo } from './AddTodo';
import { addTodo } from '../redux/slice';
import { TodoItem } from './types';
import { Todo } from './Todo';
import { RootState } from '../redux/store';

export const TodoList: React.FC = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state: RootState) => state.todoList.todos)

    const addItem = (todoItem: TodoItem) => dispatch(addTodo(todoItem));

    return (
        <>
            <AddTodo addTodoItem={addItem} />
            {todos.map((todoItem: TodoItem) => <Todo todoItem={todoItem}/>)}
        </>
    );
}