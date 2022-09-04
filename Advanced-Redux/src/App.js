import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { uiSliceActions } from './store/ui-slice';

let isInitial = true;

function App() {
  const showCart = useSelector(state => state.uiReducer.cartIsVisible);
  const cart = useSelector(state => state.cartReducer);
  const dispatch = useDispatch()
  const notification = useSelector(state => state.uiReducer.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(uiSliceActions.showNotification({
        status: 'pending',
        title: 'Sending cart request',
        message: 'Sending cart data!'
      }))
      const response = await fetch('https://react-http-course-190bc-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart)
      })
      if (!response.ok) {
        dispatch(uiSliceActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!'
        }))
      }
      // const responseData = await response.json();
      dispatch(uiSliceActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sent cart data successfully!'
      }))
    }

    if (isInitial) {
      isInitial = false;
      return;
    }
    sendCartData().catch(error => {
      dispatch(uiSliceActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed!'
      }))
    });

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
