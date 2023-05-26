import './Sidebar.scss';
import SidebarItem from '../../Components/SidebarItem/SidebarItem';

const Sidebar = () => {

    return (
        <section className="Sidebar">
            <SidebarItem />
            <SidebarItem />
            <SidebarItem />
            <SidebarItem />
        </section>
    );
}

export default Sidebar;