import ProductItem from './ProductItem';
import classes from './Products.module.css';



const dummyProducts = [
  {
    id: '1',
    title: 'Apple',
    price: 10,
    description: 'Well, it keeps the doctor away!',
  },
  {
    id: '2',
    title: 'Gooseberry',
    price: 15,
    description: 'A little raspy, but healthy for hair and skin',
  },
  {
    id: '3',
    title: 'Pomegranate',
    price: 20,
    description: 'The juicy and healthy one!',
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>

       {
        dummyProducts.map((product) =>(
          <ProductItem

            title = {product.title}
            price = {product.price}
            description = {product.description}
            id = {product.id}
            key = {product.id}

          />

          
        ))
       }

      </ul>
    </section>
  );
};

export default Products;
