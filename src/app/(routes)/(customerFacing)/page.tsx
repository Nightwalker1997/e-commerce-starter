import {
    getNewestProducts, 
    getPopularProducts
} from "./actions/getProducts";
import ProductFetcher from "./components/productsFetcher";

const Home = async () => {

    return (
        <main
            className="space-y-12"
        >
            <ProductFetcher 
                title="Most Popular" 
                productFetcher={getPopularProducts} 
            />
            <ProductFetcher 
                title="Newest" 
                productFetcher={getNewestProducts} 
            />
        </main>
    );
}

export default Home;
