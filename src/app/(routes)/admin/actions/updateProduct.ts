'use server';

import prisma from '@/libs/prismadb';
import { z } from 'zod';
import fs from 'fs/promises';
import { redirect } from 'next/navigation';
import getProduct from './getProduct';
import { revalidatePath } from 'next/cache';

const fileSchema = z.instanceof(File, { message: "Required"});
const imageSchema = fileSchema.refine(
    file => file.size === 0 || file.type.startsWith("image/")
)


const updateSchema = z.object({
    name: z.string().min(1).optional(),
    description: z.string().min(1).optional(),
    price: z.coerce.number().int().min(1).optional(),
    file: fileSchema.optional(),
    image: imageSchema.optional()
})

export default async function updateProduct (id: string, formData: FormData) {
    const result = updateSchema.safeParse(
                                Object.fromEntries(
                                    formData.entries()));
    
    if(!result.success){
        return result.error.formErrors.fieldErrors;
    }

    const {
        name,
        description,
        price,
        file,
        image
    } = result.data;

    const product = await getProduct(id);

    if(!product){
        return ;
    }

    let filePath = product.filePath;
    if(file != null && file.size > 0){
        //delete Previos file
        await fs.unlink(product.filePath);
        
        //file path
        filePath = `public/static/products/files/${crypto.randomUUID()}-${file.name}`
        await fs.writeFile(filePath, Buffer.from(await file.arrayBuffer()))    
    }
 
    let imagePath = product.imagePath;
    // Image path
    if(image != null && image.size > 0){
        //delete Previos image
        await fs.unlink(product.imagePath);
        
        imagePath = `public/static/products/images/${crypto.randomUUID()}-${image.name}`
        await fs.writeFile(imagePath, Buffer.from(await image.arrayBuffer()))  
    }

    const newProduct = await prisma.product.update({
        where: {
            id
        },
        data:{
            isAvailableForPurchase: false,
            name: name,
            description: description,
            priceInCents: price,
            filePath: filePath,
            imagePath: imagePath
        }
    })

    
    revalidatePath('/');
    revalidatePath('/products');

    redirect('/admin/products');
}
