import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";

export default function SearchBar({ 
    filterText, 
    inStockOnly, 
    onFilterChange, 
    onInStockOnlyChange 
}) {

    return (
        <div>
            <FormGroup sx={{ mb: 5 }}>
            <TextField 
                fullWidth 
                label="Search" 
                value={filterText} 
                onChange={(e) => onFilterChange(e.target.value)} 
            />
            <FormControlLabel 
                control={<Checkbox checked={inStockOnly} 
                onChange={(e) => onInStockOnlyChange(e.target.checked)} />} 
                label="Only show products in stock" 
            />
            </FormGroup>
        </div>
    )
}