import prisma from '@/libs/prismadb';


export const getPopularProducts = () => {
    // try{
        const products = prisma.product.findMany({
            where:{
                isAvailableForPurchase: true
            },
            orderBy:{
                orders:{
                    _count: "desc"
                }
            }
        })

        // if(!products) return [];

        return products;

    // }catch(err: any){
    //     return [];
    // }
}

export const getNewestProducts = () => {
    // try{
        const products = prisma.product.findMany({
            where:{
                isAvailableForPurchase: true
            },
            orderBy:{
                createdAt: 'desc'
            }
        })

        // if(!products) return [];

        return products;

    // }catch(err: any){
    //     return [];
    // }
}

export const getAllProducts = () => {
    // try{
        const products = prisma.product.findMany({
            where:{
                isAvailableForPurchase: true
            },
            orderBy:{
                name: 'desc'
            }
        })

        // if(!products) return [];

        return products;

    // }catch(err: any){
    //     return [];
        // }
}