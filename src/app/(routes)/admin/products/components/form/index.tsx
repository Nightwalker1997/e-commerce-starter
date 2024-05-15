'use client';

import { useState, FC } from "react";
import { Product } from "@prisma/client";
import Input from "@/components/ui/input";
import Textarea from "@/components/ui/textarea";
import Button from "@/components/ui/button";
import { formatCurrency } from "@/libs/formatter";
import Image from "next/image";
import updateProduct from "../../../actions/updateProduct";

type ProductProps = {
    product?: Product
}

const ProductForm:FC<ProductProps> = ({
    product
}) => {
    const [price, setPrice] = useState<number>();
    const [description, serDescription] = useState<string>();

    return(
        <form 
            // action={updateProduct}
        >
            <div> 
                <Input 
                    label="Name" 
                    id="name" 
                    type="text"
                    required={product == null}
                    autofocus
                    defaultValue={product?.name || ''}
                />
                <Input 
                    label="Price in Cents" 
                    id="price" 
                    type="number"
                    defaultValue={`${product?.priceInCents}`}
                    required={product == null}
                    onChange={e => setPrice(Number(e.target.value) ||  0)}
                    subtitle={formatCurrency((price || product?.priceInCents || 0) / 100)}
                />
                <Textarea
                    label="Description"
                    id="description"
                    defaultValue={product?.description}
                    required={product == null}
                    onChange={e => serDescription(e.target.value)}
                />
                <Input
                    label="File"
                    id="file"
                    type="file"
                    required={product == null}
                    subtitle={product?.filePath}
                />
                
                <Input
                    label="Image"
                    id="image"
                    type="file"
                    required={product == null}
                />
                {product !== null && (
                    <div
                        className="ml-12"
                    >
                        <Image 
                            src={`${product?.imagePath.replace('public/', '/')}` || ''}
                            height="400"
                            width="400"
                            alt="Product Image"
                        />
                    </div>
                )}
                <div className="flex justify-center items-center">
                    <Button type="submit">
                        Update
                    </Button>
                </div>
            </div>
        </form> 
    )
}

export default ProductForm;