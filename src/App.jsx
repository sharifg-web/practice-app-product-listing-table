import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import PRODUCTS from './products';
import FilterableProductsTable from './components/FilterableProductsTable';
import './App.css';

export default function App() {

  const year = new Date().getFullYear(); // get current year

  return (
    <>
      <header>
        <h1>Products Listing</h1>
      </header>
      <article>
        <FilterableProductsTable products={PRODUCTS} />
      </article>
      <footer>Copyright &copy; {year}</footer>
    </>
  )
}
