import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  { id: 'p1', price: 6, title: 'My First Book', description: 'The first book I ever wrote' },
  { id: 'p2', price: 7, title: 'My First PC', description: 'The first PC I ever wrote' },
  { id: 'p3', price: 23, title: 'My First Note', description: 'The first Note I ever wrote' },
  { id: 'p4', price: 10, title: 'My First Pencil', description: 'The first Penci I ever wrote' }
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product => (
          <ProductItem
            key={product.i}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}

      </ul>
    </section>
  );
};

export default Products;
