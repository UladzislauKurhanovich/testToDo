import { useDispatch, useSelector } from 'react-redux';
import { AddTodo } from '../AddToDo/AddTodo';
import { addTodo, removeTodo, editTodo } from '../../redux/slice';
import { TodoItem } from '../types';
import { Todo } from '../Todo/Todo';
import { RootState } from '../../redux/store';

export const TodoList: React.FC = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state: RootState) => state.todoList.todos)

    const addItem = (todoItem: TodoItem) => dispatch(addTodo(todoItem));
    const removeItem = (id: number) => dispatch(removeTodo(id));
    const editItem = (todoItem: TodoItem) => dispatch(editTodo(todoItem));


    return (
        <>
            <AddTodo addTodoItem={addItem} />
            {todos.map((todoItem: TodoItem) => <Todo todoItem={todoItem} removeItem={removeItem} editItem={editItem}/>)}
        </>
    );
}