import Container from "../../components/Container";
import PricesList from "../../components/PricesList";
import prices from "../../data/prices";


const PricesPage = (): JSX.Element => {
    return (
        <Container>
            <PricesList prices={prices} />
        </Container>
    );
};

export default PricesPage;