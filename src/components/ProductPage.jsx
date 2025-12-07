import { useContext, useState } from 'react';
import ProductCard from './ProductCard';
import SortBar from './SortBar';
import { ProductContext } from '../context/ProductContext';

const ProductPage = ({ ProductId }) => {
    const { data } = useContext(ProductContext);
    const [getCategory, setGetCategory] = useState('all');
    // all categories
    const category = Array.from(
        new Set(data.map((product) => product.category))
    );
    // Removing spaces
    const removeSpace = (value) => {
        return value.replace(' ', '').replace(',', '').replace(`'`, '');
    };

    const filterProduct = data.filter((item) =>
        getCategory === 'all'
            ? item
            : getCategory === removeSpace(item.category)
    );
    console.log('Filterd data: ', filterProduct);
    return (
        <section className="flex flex-col bg-gray-50 w-full items-center justify-center p-20">
            <div>
                <SortBar categories={category} sendCategory={setGetCategory} />
            </div>
            {/* <h1 className="mb-5">Selected category: {getCategory}</h1> */}
            <div className="w-3/4 grid grid-cols-4 items-center justify-center gap-10 overflow-hidden overflow-y-auto h-[700px]">
                {filterProduct.map((item) => {
                    return (
                        <ProductCard
                            key={item.id}
                            Product={item}
                            productId={ProductId}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default ProductPage;
