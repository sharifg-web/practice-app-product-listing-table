import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export default function ProductRow({ product }){
    const name = product.stocked ? product.name : <span style={{ color: 'red' }}>{product.name}</span>
    
    return (
        <TableRow>
            <TableCell>{name}</TableCell>
            <TableCell>{product.price}</TableCell>
        </TableRow>
    )
}