'use server';

import prisma from '@/libs/prismadb';

const userOrderExitst = async(
    email: string, 
    productId: string
) => {
    const order = await prisma.order.findFirst({
        where:{
            user: {email}, productId
        },
        select:{
            id: true
        }
    })
    
    return order != null;
}

export default userOrderExitst;