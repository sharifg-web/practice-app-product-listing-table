import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default function ProductTable({ products, filterText, inStockOnly }) {
    const rows = [];
    let lastCategory = null;
  
    products.forEach((product) => {
      if(
        product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1
      ) {
        return;
      }
      if(inStockOnly && !product.stocked) {
        return;
      }
      if(product.category !== lastCategory){
        rows.push(
          <ProductCategoryRow category={product.category} key={product.category} />
        );
      }
      rows.push(
        <ProductRow product={product} key={product.name} />
      );
      lastCategory = product.category;
    });
  
    return (
      <div>
        <TableContainer component={Paper} elevation={3}>
          <Table sx={{ minWidth: 650 }} aria-label="Product Listing Table">
            <TableHead>
              <TableRow>
                <TableCell variant='head' sx={{ fontWeight: 700, textTransform: 'uppercase' }}>Name</TableCell>
                <TableCell variant='head' sx={{ fontWeight: 700, textTransform: 'uppercase' }}>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{rows}</TableBody>
          </Table>
        </TableContainer>
      </div>
    )
  }