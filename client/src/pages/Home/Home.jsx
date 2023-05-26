import './Home.scss';
import MenuList from '../../Containers/MenuList/MenuList';
import Sidebar from '../../Containers/Sidebar/Sidebar';

import { useEffect } from 'react';
import axios from '../../axios';

const Home = () => {

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('/products');
            console.log(data);
        }
        fetchProducts();

    }, []);

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