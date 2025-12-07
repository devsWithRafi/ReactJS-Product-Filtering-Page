const SortBar = ({ categories, sendCategory }) => {
    const handleSendCategory = (e) => {
        sendCategory(e.target.value.replace(`'`, ``).replace(' ', '').trim());
    };

    return (
        <div className="mb-10">
            <div className="flex gap-5 items-center justify-between">
                <button
                    value={'all'}
                    onClick={handleSendCategory}
                    className="bg-white shadow-sm px-5 py-2 rounded-full font-semibold 
            uppercase text-[0.8rem] cursor-pointer"
                >
                    All
                </button>
                {categories.map((category, index) => (
                    <button
                        key={index}
                        value={category}
                        onClick={handleSendCategory}
                        className="bg-white shadow-sm px-5 py-2 rounded-full font-semibold 
            uppercase text-[0.8rem] cursor-pointer"
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SortBar;
