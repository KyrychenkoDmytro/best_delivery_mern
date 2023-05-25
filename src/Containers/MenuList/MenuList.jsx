import './MenuList.scss';
import MenuListItem from '../MenuListItem/MenuListItem';

const MenuList = () => {

    return (
        <section className="MenuList">
            <div className="MenuList__container">
                <MenuListItem />
                <MenuListItem />
                <MenuListItem />
                <MenuListItem />
                <MenuListItem />
            </div>
        </section>
    );
}

export default MenuList;