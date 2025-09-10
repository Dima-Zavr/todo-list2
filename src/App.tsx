import { Container, Box, Typography, Fab, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { observer } from "mobx-react";
import { notepadStore } from "./store/NotepadStore.ts";
import { modalStore } from "./store/modalStore.ts";
import MyModal from "./components/MyModal/MyModal.tsx";
import MyCard from "./components/MyCard/MyCard.tsx";

const App = () => {
    const { modal } = modalStore;

    const openModal = () => {
        modal.open("Создание блокнота");
    };

    return (
        <>
            <Container maxWidth="lg">
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="h2">Todo-List</Typography>
                    <Fab onClick={openModal} color="primary" aria-label="add">
                        <AddIcon />
                    </Fab>
                </Box>
                <TextField
                    label="Поиск по заметкам"
                    variant="outlined"
                    sx={{ width: "100%" }}
                    onChange={(event) => notepadStore.search(event.target.value)}
                />
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    {notepadStore.filterNotepads?.map((notepad) => <MyCard notepad={notepad} key={notepad.id} />)}
                </Box>
            </Container>
            <MyModal />
        </>
    );
};
export default observer(App);
