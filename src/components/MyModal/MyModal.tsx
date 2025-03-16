import { Modal, Typography, Box, TextField, MenuItem, Button } from "@mui/material";
import { taskStore } from "../../store/taskStore.ts";
import { modalStore } from "../../store/modalStore.ts";
import { observer } from "mobx-react";

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

export const MyModal = observer(() => {
    const { modal } = modalStore;
    
    const handleClose = () => {
        modal.setIsOpen();
    };

    // @ts-ignore
    const handleSubmit = (event) => { // указывает на event как на ошибку, не понимаю как пофиксить
        event.preventDefault();
        let form = new FormData(event.target);
        let filtersObject = Object.fromEntries(form.entries());
        // @ts-ignore
        taskStore.addTask(filtersObject); // тоже что и выше

        modal.setIsOpen();
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
                    Форма
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField label="Название" variant="outlined" fullWidth margin="normal" name="name" required />
                    <TextField
                        label="Описание"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        multiline
                        rows={4}
                        name="description"
                        required
                    />
                    <TextField
                        select
                        label="Тип"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        name="type"
                        defaultValue=""
                        required
                    >
                        <MenuItem value="Дом">Дом</MenuItem>
                        <MenuItem value="Работа">Работа</MenuItem>
                        <MenuItem value="Увлечения">Увлечения</MenuItem>
                    </TextField>
                    <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
                        Создать задачу
                    </Button>
                </form>
            </Box>
        </Modal>
    );
});
