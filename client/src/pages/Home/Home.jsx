import './Home.scss';
import MenuList from '../../Containers/MenuList/MenuList';
import Sidebar from '../../Containers/Sidebar/Sidebar';

const Home = () => {

    return (
        <main className="Home">
            <div className="Home__container">
                <Sidebar />
                <MenuList />
            </div>
        </main>
    );
}

export default Home;