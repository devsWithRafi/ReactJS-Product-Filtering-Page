import { useEffect, useState } from 'react';
import { ProductContext } from './ProductContext';

const ProductProvider = ({ children }) => {
    const url = 'https://fakestoreapi.com/products';
    const [data, setData] = useState([]);

    const fetchData = async (Url) => {
        try {
            const res = await fetch(Url);
            const data = await res.json();
            setData(data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchData(url);
    }, []);

    return (
        <ProductContext.Provider value={{ data }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;
