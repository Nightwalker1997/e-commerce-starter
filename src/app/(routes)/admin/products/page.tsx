

import Table from "./components/table";
import getProducts from '../actions/getProducts';
import ProductHeader from './components/header';

const AdminProducts = async () => {

    const products  = await getProducts();

    return(
        <div
            className="
                bg-bg-base
            "
        >
            
            <ProductHeader />

            <div className="lg:px-12">
                <Table items={products!}/>
            </div>
        </div>
    )
}

export default AdminProducts;