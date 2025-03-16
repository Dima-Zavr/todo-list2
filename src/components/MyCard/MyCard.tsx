import { Card, Typography, CardContent, Box, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import { observer } from "mobx-react";
import { taskStore } from "../../store/taskStore.ts";
import { TaskModel } from "../../models/TaskModel";

interface IMyCard {
    task: TaskModel
}

export const MyCard = observer(({ task }: IMyCard) => {
    const handleDelete = () => {
        taskStore.removeTask(task.id)
    };

    const handleStatusChange = () => {
        task.changeStatusTask()
    };

    return (
        <Card>
            <CardContent>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}
                >
                    <Box>
                        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
                            Тип: {task.type}
                        </Typography>
                        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
                            Статус: {(task.status) ? "Выполнено" : "Не Выполнено"}
                        </Typography>
                        <Typography variant="h5" component="div">
                            {task.name}
                        </Typography>
                        <Typography variant="body2">{task.description}</Typography>
                    </Box>
                    <Box>
                        <IconButton onClick={handleStatusChange} aria-label="change-status">
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
});
