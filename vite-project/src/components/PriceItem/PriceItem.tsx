import { Price } from "../../types";

const PriceItem = ({ price }: { price: Price}) => {
    return (
        <div className="flex justify-around">
            <h3 className="text-xl font-semibold">{price.name}</h3>
            <p className="text-gray-500 mt-2">${price.price}</p>
        </div>
    )
}

export default PriceItem;