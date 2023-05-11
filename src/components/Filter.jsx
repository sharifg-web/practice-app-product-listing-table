import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Filter() {

    const checkboxLabel = { 
        inputProps: { 
            'aria-label' : 'Filter checkbox',
            'label' : 'Only show products in stock'
        }
    }
    return (
        <FormGroup>
            <FormControlLabel control={<Checkbox {...checkboxLabel} />} label="Only show products in stock" />
        </FormGroup>
    );
}