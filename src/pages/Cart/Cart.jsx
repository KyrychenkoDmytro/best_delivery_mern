import './Cart.scss';
import CartForm from '../../Components/CartForm/CartFrom';
import CartOrders from '../../Containers/CartOrders/CartOrders';


const Cart = () => {

    return (
        <section className="Cart">
           <div className="Cart__container">
                <CartForm />
                <CartOrders />
           </div>
        </section>
    );
}

export default Cart;