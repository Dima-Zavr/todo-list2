import { Container, Box, Typography, Fab, TextField, MenuItem } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { observer } from "mobx-react";
import { notepadStore } from "./store/NotepadStore.ts";
import { modalStore } from "./store/modalStore.ts";
import MyModal from "./components/MyModal/MyModal.tsx";
import MyCard from "./components/MyCard/MyCard.tsx";
import { Spinner } from "./components/Spin/Spin.tsx";
import { useSequentialAnimation } from "./components/useSequentialAnimation/useSequentialAnimation.tsx";
import { NotepadModel } from "./models/NotepadModel.ts";

const App = () => {
    const { modal } = modalStore;

    const visibleStates = useSequentialAnimation<NotepadModel>(notepadStore.filterNotepads || [], 200);

    return (
        <>
            <Container maxWidth="lg">
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="h2">Todo-List</Typography>
                    <Fab onClick={() => modal.open("Создание блокнота")} color="primary" aria-label="add">
                        <AddIcon />
                    </Fab>
                </Box>
                <TextField
                    label="Поиск по заметкам"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="search"
                    onChange={(event) => notepadStore.search(event.target.value)}
                />
                <TextField
                    select
                    label="Сортировка"
                    variant="outlined"
                    margin="normal"
                    name="type"
                    sx={{ width: "300px" }}
                    onChange={(event) => notepadStore.sorted(event.target.value)}
                >
                    <MenuItem value="NameDown">Название (А-Я)</MenuItem>
                    <MenuItem value="NameUp">Название (Я-А)</MenuItem>
                    <MenuItem value="PriorityDown">Приоритет (по возрастанию)</MenuItem>
                    <MenuItem value="PriorityUp">Приоритет (по убыванию)</MenuItem>
                    <MenuItem value="DateDown">Дата (по возрастанию)</MenuItem>
                    <MenuItem value="DateUp">Дата (по убыванию)</MenuItem>
                </TextField>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2, alignItems: "center" }}>
                    {notepadStore.filterNotepads?.length > 0 ? (
                        notepadStore.filterNotepads.map((notepad, index) => (
                            <MyCard notepad={notepad} key={notepad.id} isVisible={visibleStates[index] || false} />
                        ))
                    ) : (
                        <Spinner />
                    )}
                </Box>
            </Container>
            <MyModal />
        </>
    );
};
export default observer(App);
