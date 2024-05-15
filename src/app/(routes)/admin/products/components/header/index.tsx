'use client';

import Button from "@/components/ui/button";
import { useRouter } from "next/navigation";

const ProductsHeader = () => {

    const router    = useRouter();

    return(
        <div
                className="
                    flex
                    justify-between
                    item-center
                    px-8
                    py-4
                "
            >
                <h1
                    className="
                        font-semibold
                        text-tx-base
                        text-3xl
                    "
                >
                    Products
                </h1>
                <Button
                    onClick={() => {
                        router.push('/admin/products/new');
                    }}
                >
                    Add Product
                </Button>
            </div>  
    )
}

export default ProductsHeader;