'use server';

import prisma from '@/libs/prismadb';
// import { notFound } from 'next/navigation';
import fs from "fs/promises"

const DeleteProduct = async (id: string) => {
    const product = await prisma.product.delete({where: {id}});
    if(product == null){
        return null;
    }

    await fs.unlink(product.filePath);
    await fs.unlink(product.imagePath);
}

export default DeleteProduct;