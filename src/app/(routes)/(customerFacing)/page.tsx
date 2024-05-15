import {
    getNewestProducts, 
    getPopularProducts
} from "./actions/getProducts";
import ProductFetcher from "./components/productsFetcher";

const Home = async () => {
    const newesPro =  getNewestProducts();
    const popularPro = getPopularProducts();
    
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
