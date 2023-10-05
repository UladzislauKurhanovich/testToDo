import { FC } from "react";
import { TodoItem } from "./types"

type Props = {
    todoItem: TodoItem,
};

export const Todo: FC<Props> = ({ todoItem }) => {
    
    return (
        <>
            {todoItem.description} {todoItem.date.toLocaleString()}
        </>
    )
}

