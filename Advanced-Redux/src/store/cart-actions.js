import { uiSliceActions } from "./ui-slice";
import { cartSliceActions } from "./cart-slice";

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://react-http-course-190bc-default-rtdb.firebaseio.com/cart.json');
            if (!response.ok) {
                throw new Error('Could not fetch cart data!')
            }
            const data = await response.json();

            return data;
        };

        try {
            const cartData = await fetchData();
            dispatch(cartSliceActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity,
            }));
        } catch (error) {
            dispatch(uiSliceActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending cart data failed!'
            }))
        }
    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            uiSliceActions.showNotification({
                status: 'pending',
                title: 'Sending cart request',
                message: 'Sending cart data!'
            })
        );

        const sendRequest = async () => {
            const response = await fetch('https://react-http-course-190bc-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify({
                    items: cart.items,
                    totalQuantity: cart.totalQuantity,
                })
            })

            if (!response.ok) {
                dispatch(uiSliceActions.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Sending cart data failed!'
                }))
            }
        };

        try {
            await sendRequest();

            dispatch(uiSliceActions.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Sent cart data successfully!'
            }))

        } catch (error) {
            dispatch(uiSliceActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending cart data failed!'
            }))
        }
    }
}