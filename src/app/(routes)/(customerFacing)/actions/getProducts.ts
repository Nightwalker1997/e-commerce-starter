import prisma from '@/libs/prismadb';
import { cache } from '@/libs/cache'

export const getPopularProducts = cache(() => {
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
}, 
['/', 'getPopularProducts'],
{revalidate: 60 * 60}) //every hour

export const getNewestProducts = cache(() => {
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
}, 
['/', 'getNewestProducts'],
{revalidate: 60 * 60}) //every hour


export const getAllProducts = cache(() => {
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
}, 
['/products', 'getAllProducts'],
{revalidate: 60 * 60}) //every hour