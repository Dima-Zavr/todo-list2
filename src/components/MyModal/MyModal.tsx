import { useState } from "react";
import { Modal, Typography, Box, TextField, MenuItem, Button } from "@mui/material";
import { notepadStore } from "../../store/NotepadStore.ts";
import { modalStore } from "../../store/modalStore.ts";
import { Priority } from "../../interfaces/Notepad/NotepadInterface.ts";
import { observer } from "mobx-react";
import ArrayInput from "../ArrayInput/ArrayInput.tsx";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4
};

const MyModal = () => {
    const { modal } = modalStore;

    const [errors, setErrors] = useState({
        name: "",
        type: ""
    });

    const handleClose = () => {
        modal.close();
        setErrors({
            name: "",
            type: ""
        });
    };

    const handleSubmit = () => {
        if(!validateForm()) return;
        if (modal.title === "Создание блокнота") {
            notepadStore.addNotepad(modal);
        } else {
            notepadStore.updateNotepad(modal);
        }
        modal.close();
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = { ...errors };

        if (!modal.name.trim()) {
            newErrors.name = "Поле не может быть пустым";
            isValid = false;
        } else {
            newErrors.name = "";
        }

        if (!modal.type.trim()) {
            newErrors.type = "Поле не может быть пустым";
            isValid = false;
        } else {
            newErrors.type = "";
        }

        setErrors(newErrors);
        return isValid;
    }

    return (
        <Modal
            open={modal.isOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography variant="h5" gutterBottom>
                    {modal.title}
                </Typography>
                <TextField
                    label="Название"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="name"
                    error={!!errors.name}
                    helperText={errors.name}
                    value={modal.name}
                    onChange={(event) => modal.setName(event.target.value)}
                    required
                />
                <TextField
                    select
                    label="Приоритет"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="type"
                    error={!!errors.type}
                    helperText={errors.type}
                    value={modal.type}
                    onChange={(event) => modal.setType(event.target.value as Priority)}
                    required
                >
                    <MenuItem value="1">Срочно и важно</MenuItem>
                    <MenuItem value="2">Не срочно но важно</MenuItem>
                    <MenuItem value="3">Срочно но неважно</MenuItem>
                    <MenuItem value="4">Не срочно и неважно</MenuItem>
                </TextField>
                <ArrayInput label="Введите задачу и нажмите Enter" startTasks={modal.tasks} />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    fullWidth
                    sx={{ marginTop: 2 }}
                >
                    {modal.title === "Создание блокнота" ? "Сохранить" : "Редактировать"} блокнот
                </Button>
            </Box>
        </Modal>
    );
};
export default observer(MyModal);
