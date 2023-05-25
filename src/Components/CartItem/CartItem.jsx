import './CartItem.scss';

const CartItem = () => {
    return (
        <div className="CartItem">
<div className="CartItem__wrap">
                <div className="CartItem__name"></div>
                <div className="CartItem__wrapper-price">
                    <div className="CartItem__old-price">14</div>
                    <div className="CartItem__new-price">12</div>
                </div>
                <div className="CartItem__wrapper-quantity">
                    <div className="CartItem__quantity-label">Quantity : </div>
                    <div className="CartItem__quantity-wrapper-input">
                        <input
                            className="CartItem__quantity-input"
                            type="number"
                        />
                    </div>
                </div>
                <button
                    className="CartItem__btn-cancel-order"
                ></button>
            </div>
        </div>
    );
}

export default CartItem;