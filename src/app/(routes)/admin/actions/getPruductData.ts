import prisma from "@/libs/prismadb";

const getProductsData = async() => {
    try{
        
        const [activeCount, inactiveCount] = await Promise.all([
            prisma.product.count({where: {isAvailableForPurchase: true}}),
            prisma.product.count({where: {isAvailableForPurchase: false}})
        ])
        
        return {
            activeCount,
            inactiveCount
        }
    } catch (error){
        
        return null;
    
    }
}

export default getProductsData;