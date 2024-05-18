'use server';

import prisma from '@/libs/prismadb';


const DeleteUser = async (id: string) => {
    const user = await prisma.user.delete({where: {id}});

}

export default DeleteUser;