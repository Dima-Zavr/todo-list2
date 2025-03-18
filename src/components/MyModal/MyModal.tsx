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

const MyModal = () => {
    const { modal } = modalStore;

    const handleClose = () => {
        modal.Close();
    };

    const handleSubmit = () => {
        taskStore.addTask(Object.assign(modal.getTask(), { id: taskStore.tasks.length + 1 }));
        modal.Close();
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
                <form>
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
                        label="Описание"
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
                    <TextField
                        select
                        label="Тип"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        name="type"
                        value={modal.type}
                        //@ts-ignore
                        onChange={(event) => modal.setType(event.target.value)} // так как value: string, а в setType(value: Type)
                        required
                    >
                        <MenuItem value="Дом">Дом</MenuItem>
                        <MenuItem value="Работа">Работа</MenuItem>
                        <MenuItem value="Увлечения">Увлечения</MenuItem>
                    </TextField>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                        fullWidth
                        sx={{ marginTop: 2 }}
                    >
                        Создать задачу
                    </Button>
                </form>
            </Box>
        </Modal>
    );
};
export default observer(MyModal);
