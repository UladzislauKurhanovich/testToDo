import { FC, useState } from "react";
import { TodoItem } from "./types";

type Props = {
    addTodoItem: (todoItem: TodoItem) => void,
};

export const AddTodo: FC<Props> = ({ addTodoItem }) => {
    const [inputValue, setInputValue] = useState('');

    const addTodo = () => {
        addTodoItem({
            id: Math.random(),
            description: inputValue,
            date: new Date(),
        });
        setInputValue('');
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={addTodo}>ADD</button>
        </div>
    );
}