import Form from '../../components/form';
import getProduct from '../../../actions/getProduct';

const EditProduct = async ({ 
    params: { productId }
}:{
    params: { productId: string }
}) => {
    const product = await getProduct(productId);

    return(
        <div className="container">
            <h1 className="text-2xl font-semibold text-tx-base">
                Add Product
            </h1>
            <Form product={product!}/>
        </div>
    );
}

export default EditProduct;