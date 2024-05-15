'use server';

import prisma from '@/libs/prismadb';
import { z } from 'zod';
import fs from 'fs/promises';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

const fileSchema = z.instanceof(File, { message: "Required"});
const imageSchema = fileSchema.refine(
    file => file.size === 0 || file.type.startsWith("image/")
)


const addSchema = z.object({
    name: z.string().min(1),
    description: z.string().min(1),
    price: z.coerce.number().int().min(1),
    file: fileSchema.refine(file => file.size > 0, "Required"),
    image: imageSchema.refine(file => file.size > 0, "Required")
})

export default async function addProduct (formData: FormData) {
    const result = addSchema.safeParse(
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


    //file path
    await fs.mkdir("public/static/products/files", {recursive: true});
    const filePath = `public/static/products/files/${crypto.randomUUID()}-${file.name}`
    await fs.writeFile(filePath, Buffer.from(await file.arrayBuffer()))    
    // Image path
    await fs.mkdir("public/static/products/images", {recursive: true});
    const imagePath = `public/static/products/images/${crypto.randomUUID()}-${image.name}`
    await fs.writeFile(imagePath, Buffer.from(await image.arrayBuffer()))  

    const newProduct = await prisma.product.create({
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
