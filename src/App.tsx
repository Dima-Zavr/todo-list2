import { Container, Button, Box, Typography } from "@mui/material";
import { observer } from "mobx-react";
import { taskStore } from "./store/taskStore.ts";
import { modalStore } from "./store/modalStore.ts";
import { MyModal } from "./components/MyModal/MyModal.tsx";
import { MyCard } from "./components/MyCard/MyCard.tsx";

export const App = observer(() => {
    const { modal } = modalStore;

    const openModal = () => {
        modal.setIsOpen();
    };

    return (
        <>
            <Container maxWidth="lg">
                <Typography variant="h2">Todo-List</Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <Button onClick={openModal} variant="contained" className="button">
                        Добавить задачу
                    </Button>
                    {taskStore.tasks?.map((task) => <MyCard task={task} key={task.id} />)}
                </Box>
            </Container>
            <MyModal />
        </>
    );
});
