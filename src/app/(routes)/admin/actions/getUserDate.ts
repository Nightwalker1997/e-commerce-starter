import prisma from "@/libs/prismadb";

const getUserData = async() => {
    try{
        
        const [userCount, orderData] = await Promise.all([
            prisma.user.count(),
            prisma.order.aggregate({
                _sum: { priceInCents: true }
            }),
        ])

        return {
            userCount,
            averageValuePerUser: userCount === 0 
                ? 
                    0 
                : 
                (orderData._sum.priceInCents || 0) / userCount / 100
        }
    } catch (error){
        
        return null;
    
    }
}

export default getUserData;