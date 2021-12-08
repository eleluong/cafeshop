import React, {useState, useEffect} from 'react';
import { Navbar, Products } from './components';
import { commerce } from './lib/commerce';
function App() {
    const [products, setProducts] = useState([]);

    const FetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
    }

    useEffect(() => {
        FetchProducts();
    }, []);

    //console.log(products);

    return (
        <div>
            <Navbar />
            <Products products = {products}/>

        </div>

    );
}

export default App;
