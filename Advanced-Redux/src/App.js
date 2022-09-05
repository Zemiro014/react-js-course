import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { sendCartData, fetchCartData } from './store/cart-actions';

let isInitial = true;

function App() {
  const showCart = useSelector(state => state.uiReducer.cartIsVisible);
  const cart = useSelector(state => state.cartReducer);
  const dispatch = useDispatch()
  const notification = useSelector(state => state.uiReducer.notification);

  useEffect(() => {
    dispatch(fetchCartData())
  }, [dispatch])

  useEffect(() => {

    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart))
    }
  }, [cart, dispatch]);

  return (
    <>
      {notification && <Notification
        status={notification.status}
        title={notification.title}
        message={notification.message}
      />
      }
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
