import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Search from './components/Search';
import './App.css';

function App() {

  const year = new Date().getFullYear(); // get current year

  return (
    <>
      <header>
        <h1>Product Listing Table</h1>
      </header>
      <article>
        <Search />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='Product listing table'>
            <TableHead>
              <TableRow>
                <TableCell align='center' variant='head' sx={{ fontWeight: 700, textTransform: 'uppercase' }}>Name</TableCell>
                <TableCell align='center' variant='head' sx={{ fontWeight: 700, textTransform: 'uppercase' }}>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align='center' colSpan={2}>Fruits</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Apple</TableCell>
                <TableCell>$1</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dragonfruit</TableCell>
                <TableCell>$1</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Passionfruit</TableCell>
                <TableCell>$2</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center' colSpan={2}>Vegestables</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Spinach</TableCell>
                <TableCell>$2</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Pumpkin</TableCell>
                <TableCell>$4</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Peas</TableCell>
                <TableCell>$1</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </article>
      <footer>Copyright &copy; {year}</footer>
    </>
  )
}

export default App
