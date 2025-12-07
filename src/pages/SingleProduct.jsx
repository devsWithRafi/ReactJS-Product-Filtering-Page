import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ProductContext } from '../context/ProductContext';
import Rating from '../components/Rating';
import { FiMinus, FiPlus } from 'react-icons/fi';

const SingleProduct = () => {
    const { id } = useParams();
    const { data } = useContext(ProductContext);
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (!data || data.length === 0) return;
        const found = data.find((item) => item.id === Number(id));
        setProduct(found || null);
    }, [data, id]);

    if (!data) return <h1>Data Loading...</h1>;
    if (!product) return <h1>Oops Product Not Found!</h1>;

    const handleAddPrice = () => {
        setQuantity(quantity + 1);
    };
    const handleRemovePrice = () => {
        setQuantity(quantity - 1);
    };

    return (
        <section className="flex justify-between max-w-[1400px] mx-auto w-full max-h-[400px] p-20">
            {/* Left side */}
            <div className="h-full">
                <div className="w-[550px] h-[550px] flex items-center justify-center bg-gray-100 p-10 rounded-[30px] shadow-sm">
                    <img src={product.image} className="w-[90%] h-[90%]" />
                </div>
            </div>
            {/* Right side */}
            <div className="w-full p-5 px-10 h-[550px]">
                <div className="flex flex-col justify-between min-h-full">
                    {/* Category */}
                    <div className="bg-gray-900 text-white py-1 w-[200px] flex items-center justify-center">
                        <p className="uppercase">{product.category}</p>
                    </div>
                    {/* Title */}
                    <h1 className="text-[2.5rem] font-semibold leading-13">
                        {product.title}
                    </h1>
                    {/* descriptions */}
                    <p className="text-gray-500 font-medium">
                        {product.description}
                    </p>
                    {/* reviews */}
                    <div className="flex text-orange-400 items-center gap-2">
                        <div className="flex text-[1.5rem]">
                            <Rating rattings={product.rating.rate} />
                        </div>
                        <h5 className="font-semibold text-[1.3rem]">
                            ({product.rating.count})
                        </h5>
                    </div>
                    {/* Price and Quantity */}
                    <div className="flex justify-between">
                        <div className="h-full flex flex-col justify-between gap-2">
                            <p className="text-gray-500 font-semibold">
                                Total Price
                            </p>
                            <h3 className="font-semibold text-[3rem] h-[50px] flex items-center">
                                ${(product.price * quantity).toFixed(2)}
                            </h3>
                        </div>
                        <div className="h-full flex flex-col justify-between gap-2">
                            <p className="text-gray-500 font-semibold">
                                Quantity
                            </p>
                            <div className="text-[1.3rem] flex items-center gap-3 h-[50px]">
                                <div
                                    className={`w-[35px] h-[35px] cursor-pointer rounded-full flex items-center justify-center text-white font-semibold ${
                                        quantity === 1
                                            ? 'pointer-events-none bg-gray-400'
                                            : 'pointer-events-auto bg-gray-900'
                                    }`}
                                    onClick={handleRemovePrice}
                                >
                                    <FiMinus />
                                </div>
                                <div className="w-[35px] h-[35px] cursor-pointer rounded-full flex items-center justify-center font-semibold select-none text-[1.4rem]">
                                    {quantity}
                                </div>
                                <div
                                    className="w-[35px] h-[35px] cursor-pointer rounded-full flex items-center justify-center bg-gray-900 text-white font-semibold"
                                    onClick={handleAddPrice}
                                >
                                    <FiPlus />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Add to cart */}
                    <div className="flex gap-5 mt-10">
                        <button className="border-2 border-gray-900 w-full py-3 rounded-full uppercase font-semibold cursor-pointer hover:bg-gray-900 hover:text-white ease-in-out duration-200 select-none">
                            add to cart
                        </button>
                        <button className="border-2 border-gray-900 w-full py-3 rounded-full uppercase font-semibold cursor-pointer bg-gray-900 text-white hover:text-gray-900 hover:bg-transparent ease-in-out duration-200 select-none">
                            buy it now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleProduct;
