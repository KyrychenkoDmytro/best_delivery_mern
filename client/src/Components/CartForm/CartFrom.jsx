import './CartForm.scss';
import { useSelector } from 'react-redux';

const CartForm = () => {
    const { totalCost, discount } = useSelector(state => state.cart);

    return (
        <div className="CartForm">
            <div className="CartForm__wrap">
                <form>
                    <div className="CartForm__full-name-wrap">
                        <div className="CartForm__label CartForm__full-name-label">Full Name*</div>
                        <div className="CartForm__input CartForm__full-name-input">
                            <input
                                type="text"
                                placeholder="Your Full Name"
                                required />
                        </div>
                    </div>
                    <div className="CartForm__email-wrap">
                        <div className="CartForm__label CartForm__email-label">Your Email*</div>
                        <div className="CartForm__input CartForm__email-input">
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                required
                            />
                        </div>
                    </div>
                    <div className="CartForm__address-wrap">
                        <div className="CartForm__label CartForm__address-label">Address*</div>
                        <div className="CartForm__input CartForm__address-input">
                            <input
                                type="text"
                                placeholder="Your address"
                                required />
                        </div>
                    </div>
                    <div className="CartForm__phone-wrap">
                        <div className="CartForm__label CartForm__phone-label">Phone number*</div>
                        <div className="CartForm__input CartForm__phone-input">
                            <input
                                type="tel"
                                placeholder="Phone: +380/0 501233232"
                                required
                            />
                        </div>
                    </div>
                    <button className="btn btn_pagination-grey CartForm__btn-confirm">Submit</button>
                </form>
            </div>
            <div className="CartForm__total">
                <div className="title CartForm__total-cost">Total Cost <span>{totalCost}₴</span></div>
                <div className="title CartForm__total-discont">Discount <span>{discount}₴</span></div>
            </div>
        </div>
    );
}

export default CartForm;