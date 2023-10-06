import { FC, useState } from "react";
import { TodoItem } from "../types";
import { Button, Input } from "antd";
import styles from "./AddTodo.module.css";

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
        <div className={styles.todosInputBlock}>
            <Input
                className={styles.todosInput}
                size="middle"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            {inputValue ?
            <Button onClick={addTodo}>Add</Button> :
            <Button disabled onClick={addTodo}>Add</Button>}
        </div>
    );
}