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

    const handleClose = () => {
        modal.close();
    };

    const handleSubmit = () => {
        if (modal.title === "Создание блокнота") {
            notepadStore.addNotepad(modal);
        } else {
            notepadStore.updateNotepad(modal);
        }
        modal.close();
    };

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
                    value={modal.name}
                    onChange={(event) => modal.setName(event.target.value)}
                    required
                />
                <TextField
                    label="Заметка"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                    name="description"
                    value={modal.description}
                    onChange={(event) => modal.setDescription(event.target.value)}
                    required
                />
                <ArrayInput label="Задача" startTasks={modal.tasks} />
                <TextField
                    select
                    label="Приоритет"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="type"
                    value={modal.type}
                    onChange={(event) => modal.setType(event.target.value as Priority)}
                    required
                >
                    <MenuItem value="Срочно и важно">Срочно и важно</MenuItem>
                    <MenuItem value="Не срочно и важно">Не срочно и важно</MenuItem>
                    <MenuItem value="Срочно и неважно">Срочно и неважно</MenuItem>
                    <MenuItem value="Не срочно и неважно">Не срочно и неважно</MenuItem>
                </TextField>

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
