import { useState } from "react";
import { observer } from "mobx-react";
import CloseIcon from "@mui/icons-material/Close";
import { modalStore } from "../../store/modalStore";
import { ITask } from "../../interfaces/Notepad/NotepadInterface";
import {
    TextField,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    Checkbox,
    ListItemText,
    IconButton
} from "@mui/material";

interface IProps {
    label: string;
    startTasks: ITask[];
}

const ArrayInput = ({ label, startTasks }: IProps) => {
    const { modal } = modalStore;

    const [tasks, setTasks] = useState(startTasks);
    const [inputValue, setInputValue] = useState("");

    const handleAddItem = () => {
        if (inputValue.trim()) {
            const newTask = {id: Date.now(), value: inputValue, isChecked: false};
            setTasks([...tasks, newTask]);
            modal.setTasks([...tasks, newTask]);
            setInputValue("");
        }
    };

    const handleDeleteItem = (value: string) => {
        const newModalTasks = tasks.filter((task) => task.value !== value);
        setTasks(newModalTasks);
        modal.setTasks(newModalTasks);
    };

    const handleToggle = (targetId: number) => {
        const newTasks = tasks.map((task) => {
            if (task.id === targetId) {
                return {...task, isChecked: !task.isChecked};
            }
            return task;
        });
        setTasks([...newTasks]);
        modal.setTasks([...newTasks]);
    };

    return (
        <>
            <TextField
                label={label}
                variant="outlined"
                fullWidth
                margin="normal"
                name="task"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAddItem()}
            />

            <List sx={{ width: "100%", bgcolor: "background.paper" }}>
                {tasks?.map((task) => (
                    <ListItem
                        key={task.id}
                        secondaryAction={
                            <IconButton edge="end" onClick={() => handleDeleteItem(task.value)}>
                                <CloseIcon />
                            </IconButton>
                        }
                        disablePadding
                    >
                        <ListItemButton role={undefined} onClick={() => handleToggle(task.id)} dense>
                            <ListItemIcon>
                                <Checkbox edge="start" checked={task.isChecked} tabIndex={-1} disableRipple />
                            </ListItemIcon>
                            <ListItemText primary={task.value} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </>
    );
};
export default observer(ArrayInput);
