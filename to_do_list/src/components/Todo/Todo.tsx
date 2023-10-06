import { FC, useState } from "react";
import { TodoItem } from "../types"
import { Button, Card, Input } from "antd";
import styles from "./Todo.module.css"
import { DeleteOutlined, EditOutlined, RollbackOutlined, SaveOutlined } from "@ant-design/icons";

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
                    <div className={styles.todosCard}>  
                        <Card title={todoItem.date.toLocaleString()}>
                            <Input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                        </Card>                 
                        
                        <div className={styles.buttons}>
                            <Button icon={<SaveOutlined />} className={styles.save} onClick={saveEditItem}>Save</Button>
                            <Button icon={<RollbackOutlined />} onClick={() => setEditMode(false)}>CANCEL</Button>
                        </div>
                    </div>
                )
                : (
                    <div className={styles.todosCard}>
                        <Card title={todoItem.date.toLocaleString()}>
                            <span>{todoItem.description}</span>
                        </Card>
                        <div className={styles.buttons}>
                            <Button icon={<EditOutlined />} className={styles.edit} onClick={() => setEditMode(true)}>EDIT</Button>
                            <Button icon={<DeleteOutlined />} danger onClick={() => removeItem(todoItem.id)}>REMOVE</Button>
                        </div>
                    </div>
                )
            }
        </>
    )
}

