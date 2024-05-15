'use client';

import Button from "@/components/ui/button";
import { formatCurrency } from "@/libs/formatter";
import { Product } from "@prisma/client";
import Image from 'next/image';
import { useRouter } from "next/navigation";

type ProductCardProps = {
    product: Product
}

const ProductCard = ({
    product
}: ProductCardProps) => {

    const router = useRouter();

    return (
        <div
            className="
                flex
                flex-col
                rounded-lg
                overflow-hidden
                border-[1px]
                text-tx-base
                bg-bg-dark
                shadow-lg
                shadow-bg-dark
            "
        >
            <div
                className="relative w-full"
            >
                <Image 
                    src={product.imagePath.replace("public/", '/')}
                    width="500"
                    height="500"
                    // fill
                    alt={`${product.name} Image`}  
                    className="" 
                />
            </div>
            <h3 className="font-semibold text-2xl px-1.5 py-1">
                {product.name}
            </h3>
            <h6 className="font-light text-sm text-tx-lighter px-1.5 py-1">
                {formatCurrency(product.priceInCents)}
            </h6>
            <p className="px-1.5 py-1 flex-1">
                {product.description}
            </p>
            <Button
                onClick={() => {
                    router.push(`/products/${product.id}/purchase`)
                }}
            >
                Purchase
            </Button>
        </div>
    )
}

export default ProductCard;