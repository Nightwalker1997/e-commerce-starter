import prisma from "@/libs/prismadb";

const getProductsData = async() => {
    try{
        
        const products = await prisma.product.findMany({
            select:{
                id: true,
                name: true,
                priceInCents: true,
                isAvailableForPurchase: true,
                _count: { select: {orders: true}}
            },
            orderBy: {
                name: 'asc'
            }
        })

        if(!products){
            return null;
        }
        console.log("getPRoducts action: ", products)
        
        return products;

    } catch (error){
        
        return null;
    
    }
}

export default getProductsData;