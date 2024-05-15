import prisma from '@/libs/prismadb';

const getProduct = async ( productId: string ) => {
    try{
        const product = await prisma.product.findUnique({
            where:{
                id: productId
            }
        })

        if(!product){
            return null;
        }

        return product;

    }catch(err){
        return null;
    }
}

export default getProduct;
