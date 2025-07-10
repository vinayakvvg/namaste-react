import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../reducer/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const emptyCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="m-10 p-8">
      <div className="text-center">
        <h1 className="font-bold text-xl">Cart</h1>
        {cartItems.length !== 0 && (
          <button
            className="bg-blue-500 text-white m-2 p-2 rounded-lg cursor-pointer"
            onClick={emptyCart}
          >
            Clear cart
          </button>
        )}
        {cartItems.length == 0 && <h1>Cart is Empty. Add Items to the cart</h1>}
      </div>
      <div className="w-6/12 m-auto">
        <ItemsList itemData={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
