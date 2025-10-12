import { Card, Typography, CardContent, Box, IconButton, Stack, Chip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { observer } from "mobx-react";
import { modalStore } from "../../store/modalStore.ts";
import { notepadStore } from "../../store/NotepadStore.ts";
import { NotepadModel } from "../../models/NotepadModel.ts";
import { PriorityColor, PriorityLabel } from "../../interfaces/Notepad/NotepadInterface.ts";

interface IProps {
    notepad: NotepadModel;
    isVisible: boolean;
}

const MyCard = ({ notepad, isVisible }: IProps) => {
    const { modal } = modalStore;

    const handleDelete = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation();
        notepadStore.removeNotepad(notepad.id);
    };

    const openModal = () => {
        modal.setModalData(notepad);
        modal.open("Редактирование блокнота");
    };

    return (
        <Card 
            onClick={openModal} 
            sx={{ 
                cursor: "pointer",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
                transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                height: isVisible ? 'auto' : 0,
                overflow: 'hidden',
                marginBottom: isVisible ? 2 : 0,
                width: '100%',
            }}
        >
            <CardContent>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}
                >
                    <Box>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <Typography variant="body2" component="div">
                                Дата:
                            </Typography>
                            <Chip label={notepad.date.toLocaleDateString()} color="info" />

                            <Typography variant="body2" component="div">
                                Время:
                            </Typography>
                            <Chip label={notepad.date.toLocaleTimeString()} color="info" />

                            <Typography variant="body2" component="div">
                                Приоритет:
                            </Typography>
                            <Chip
                                label={PriorityLabel[notepad.type]}
                                color={
                                    PriorityColor[notepad.type] as
                                        | "default"
                                        | "primary"
                                        | "secondary"
                                        | "error"
                                        | "info"
                                        | "success"
                                        | "warning"
                                }
                            />
                        </Stack>
                        <Typography variant="h4" component="div">
                            {notepad.name}
                        </Typography>
                        {notepad.tasks?.map((task) => (
                            <Typography
                                variant="body2"
                                component="li"
                                key={task.id}
                                sx={{
                                    textDecoration: task.isChecked ? "line-through" : "none",
                                    color: task.isChecked ? "gray" : "none"
                                }}
                            >
                                {task.value}
                            </Typography>
                        ))}
                    </Box>
                    <IconButton onClick={handleDelete} aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </Box>
            </CardContent>
        </Card>
    );
};
export default observer(MyCard);