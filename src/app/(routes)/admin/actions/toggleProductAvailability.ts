'use server';

import prisma from '@/libs/prismadb';
import { revalidatePath } from 'next/cache';

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

    
    revalidatePath('/');
    revalidatePath('/products');

}

export default toggleProductAvailability;