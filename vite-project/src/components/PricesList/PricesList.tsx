import { Price } from "../../types";
import PriceItem from "../PriceItem";
import Container from "../Container";

type priceProps = {
    prices: Price[]
}

const PricesList = ({ prices }: priceProps): JSX.Element => {
    return (
        <Container>
            <ul>
                {prices.map((price) => (
                    <li key={price.id} className="bg-white shadow-lg rounded-lg p-6 mt-10">
                        <PriceItem price={price} />
                    </li>
                ))}
            </ul>
        </Container>
    )
}

export default PricesList;