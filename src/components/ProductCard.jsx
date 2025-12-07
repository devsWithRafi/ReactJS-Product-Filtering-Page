import { Link, NavLink, BrowserRouter } from 'react-router-dom';

const ProductCard = ({ Product, ProductId }) => {
    return (
        <section className="bg-white shadow-md rounded-2xl text-black p-5 inline-block w-[300px] h-[450px]">
            <div className="w-full h-[250px] overflow-hidden relative flex items-center justify-center p-7">
                <Link
                    to={`/products/${Product.id}`}
                    onClick={() => ProductId(Product.id)}
                >
                    <img src={Product.image} className="w-full h-full" />
                </Link>
                <span className="text-gray-500 text-[0.7rem] absolute top-0 left-0 bg-gray-200 rounded-full px-3 py-0.5 uppercase">
                    {Product.category}
                </span>
            </div>
            <div>
                <h1 className="text-[1.3rem] font-semibold">
                    {Product.title.slice(0, 20)}...
                </h1>
                <p className="text-gray-500 text-[14px] mt-2">
                    {Product.description.slice(0, 50)}...
                </p>
                <h2 className="mt-3 text-[1.4rem] font-semibold">
                    Price:{' '}
                    <span className="text-orange-500">${Product.price}</span>
                </h2>
            </div>
        </section>
    );
};

export default ProductCard;
