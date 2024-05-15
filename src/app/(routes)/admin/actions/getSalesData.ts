import prisma from "@/libs/prismadb";

const getSalesData = async() => {
    try{
        
        const data = await prisma.order.aggregate({
            _sum: { priceInCents: true },
            _count: true
        })
        
        return{
            amount: (data._sum.priceInCents || 0) / 100,
            numberOfSales: data._count
        }

    } catch (error){
        
        return null;
    
    }
}

export default getSalesData;