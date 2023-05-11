import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Filter from './Filter';

export default function Search() {
    return (
        <Box component="Form" mb={3}>
            <TextField fullWidth label="Search" />
            <Filter />
        </Box>
    );
}