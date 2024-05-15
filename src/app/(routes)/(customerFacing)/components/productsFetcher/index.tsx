import { Product } from "@prisma/client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ProductCard from "../productCard";

type ProductFetcherProps = {
    productFetcher: () => Promise<Product[]>;
    title: string;
}

const ProductFetcher = async ({
    productFetcher,
    title
}: ProductFetcherProps) => {
    const products = await productFetcher();

    return(
        <div className="p-4 text-tx-base">
            <div className="flex gap-4">
                <h2 className="text-3xl font-bold">{title}</h2>
                <button type="button" className="hover:underline">
                    <Link href={'/products'} className="">
                        <span className="px-2">
                            View All
                        </span>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                </button>
            </div>
            <div
                className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    lg:grid-cols-3
                    gap-4
                "
            >
                {products.map((product, index) => (
                    <ProductCard key={index} product={product}/>
                ))}
            </div>
        </div>
    )
}

export default ProductFetcher;