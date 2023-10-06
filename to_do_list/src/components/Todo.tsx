import { FC, useState } from "react";
import { TodoItem } from "./types"

type Props = {
    todoItem: TodoItem,
    editItem: (item: TodoItem) => void,
    removeItem: (id: number) => void,
};

export const Todo: FC<Props> = ({ todoItem, editItem, removeItem  }) => {
    const [editMode, setEditMode] = useState(false);
    const [inputValue, setInputValue] = useState(todoItem.description);

    const saveEditItem = () => {
        editItem({
            ...todoItem,
            description: inputValue
        })
        setEditMode(false);
    };
    
    return (
        <>
            {editMode
                ? (
                    <>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <div>
                            <button onClick={saveEditItem}>SAVE</button>
                            <button onClick={() => setEditMode(false)}>CANCEL</button>
                        </div>
                    </>
                )
                : (
                    <>
                        {todoItem.description} {todoItem.date.toLocaleString()}
                        <div>
                            <button onClick={() => setEditMode(true)}>EDIT</button>
                            <button onClick={() => removeItem(todoItem.id)}>REMOVE</button>
                        </div>
                    </>
                )
            }
        </>
    )
}

