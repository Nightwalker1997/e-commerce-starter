'use server';

import prisma from '@/libs/prismadb';

const toggleProductAvailability = async (
    id: string, 
    isAvailableForPurchase: boolean
) => {
    await prisma.product.update({
        where: {
            id
        },
        data:{
            isAvailableForPurchase
        }
    })
}

export default toggleProductAvailability;