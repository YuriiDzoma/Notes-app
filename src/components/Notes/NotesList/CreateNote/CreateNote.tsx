import {Fab} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const CreateNote = () => {
    return (
        <Fab color="primary" aria-label="add" size="small">
            <AddIcon />
        </Fab>
    )
}

export default CreateNote