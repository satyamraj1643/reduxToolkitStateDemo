import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';

function App() {
  const toShow = useSelector((state) => state.cartView.toShow);


  return (
    <Layout>
      {toShow && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
