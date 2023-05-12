import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export default function ProductCategoryRow({ category }){
    return (
        <TableRow>
          <TableCell sx={{ textTransform: 'uppercase' }} component="th" scope="row" colSpan={2}>{category}</TableCell>
        </TableRow>
    )
}