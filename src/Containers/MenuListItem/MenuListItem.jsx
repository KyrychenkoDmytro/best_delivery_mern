import './MenuListItem.scss';

// import { useDispatch } from 'react-redux';
// import { getModelId } from '../../redux/slices/products';

const MenuListItem = (props) => {
    // const { onClick, _id, category, name, imageUrl, price, discount, rank } = props;
    // const dispatch = useDispatch();
    // let newPrice;
    // if (discount) {
    //     newPrice = Math.floor(price * (1 - discount));
    // }

    // const handleModelProduct = () => {
    //     onClick();
    //     dispatch(getModelId(_id));
    // }

    return (
        <section className="MenuListItem">
            {/* <span className="MenuListItem__name">atata</span> */}
            <div className="MenuListItem__img"></div>
            <h6 className="title MenuListItem__product-name">Burger</h6>
            <div className="MenuListItem__product-info">
                <div className="MenuListItem__old-price">12</div>
                <div className="MenuListItem__new-price">10</div>
                <div className="MenuListItem__rating">⭐</div>
            </div>
            <button className='btn btn_khaki MenuListItem__btn'>Add to Cart</button>
        </section>
    );
}

export default MenuListItem;