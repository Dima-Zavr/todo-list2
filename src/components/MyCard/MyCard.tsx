import { Card, Typography, CardContent, Box, IconButton, Stack, Chip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import { observer } from "mobx-react";
import { modalStore } from "../../store/modalStore.ts";
import { notepadStore } from "../../store/NotepadStore.ts";
import { NotepadModel } from "../../models/NotepadModel.ts";
import { PriorityColor } from "../../interfaces/Notepad/NotepadInterface.ts";

interface IProps {
    notepad: NotepadModel;
}

const MyCard = ({ notepad }: IProps) => {
    const { modal } = modalStore;

    const handleDelete = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation();
        notepadStore.removeNotepad(notepad.id);
    };

    const handleStatusChange = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation();
        notepad.setStatus();
    };

    const openModal = () => {
        modal.setModalData(notepad);
        modal.open("Редактирование блокнота");
    };

    return (
        <Card onClick={openModal}>
            <CardContent>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}
                >
                    <Box>
                        <Stack direction="row" spacing={1} alignItems="center" >
                            <Typography variant="body2" component="div">Дата:</Typography>
                            <Chip label={`${notepad.date.toLocaleDateString()}`} color="info" />

                            <Typography variant="body2" component="div">Время:</Typography>
                            <Chip label={`${notepad.date.toLocaleTimeString()}`} color="info" />

                            <Typography variant="body2" component="div">Приоритет:</Typography>
                            <Chip label={`${notepad.type}`} color={PriorityColor[notepad.type]} />

                            <Typography variant="body2" component="div">Тип:</Typography>
                            <Chip
                                label={notepad.status ? "Выполнено" : "Не Выполнено"}
                                color={notepad.status ? "success" : "error"}
                            />
                        </Stack>
                        <Typography variant="h4" component="div">
                            {notepad.name}
                        </Typography>
                        <Typography variant="body1">{notepad.description}</Typography>
                    </Box>
                    <Box>
                        <IconButton onClick={(event) => handleStatusChange(event)} aria-label="change-status">
                            <CheckIcon />
                        </IconButton>

                        <IconButton onClick={handleDelete} aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};
export default observer(MyCard);
