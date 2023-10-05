import { useDispatch } from 'react-redux';
import { AddTodo } from './AddTodo';
import { addTodo } from '../redux/slice';
import { TodoItem } from './types';

export const TodoList: React.FC = () => {
    const dispatch = useDispatch();

    const addItem = (todoItem: TodoItem) => dispatch(addTodo(todoItem));

    return (
        <>
            <AddTodo addTodoItem={addItem} />
        </>
    );
}