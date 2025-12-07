import { RiStarSFill, RiStarSLine } from 'react-icons/ri';

const Rating = ({ rattings }) => {
    return (
        <div className="flex items-center">
            {Array.from({ length: 5 }, (_, index) =>
                index < parseInt(rattings) ? (
                    <RiStarSFill key={index} />
                ) : (
                    <RiStarSLine key={index} />
                )
            )}
        </div>
    );
};

export default Rating;
