import './CartOrders.scss';
import CartItem from '../../Components/CartItem/CartItem';

const CartOrders = () => {
    return (
        <div className="CartOrders">
            <div className="CartOrders__wrap">
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            <div className="CartOrders__total">
                <div className="title CartOrder__total-cost">Total Cost <span>12$</span></div>
                <div className="title CartOrder__total-discont">Discount <span>12$</span></div>
            </div>
        </div>
    );
}

export default CartOrders;