'use client';

import { useRouter } from 'next/navigation';
import {ActiveToggleDropdownItem, DeleteToggleDropdownItem} from './dropdownActions';

type DropdownProps = {
    productId: string;
    isAvailableForPurchase: boolean;
    orders: number;
}

const Dropdown:React.FC<DropdownProps> = ({
    productId,
    isAvailableForPurchase,
    orders
}) => {
    const router = useRouter();

    return(
        <div
            className="
                absolute
                flex 
                flex-col 
                
                bg-bg-light 
                font-light 
                text-tx-base
                w-24
                right-0
                z-30
                px-1.5
                py-1.5
            "
        >
            <span 
                onClick={() => {
                    router.push(`/admin/products/${productId}/download`)
                }}
                className="
                    hover:bg-bg-dark 
                    flex 
                    justify-start 
                    p-1.5
                "
            >
                Download
            </span>
            <span 
                onClick={() => {
                    router.push(`/admin/products/${productId}/edit`)
                }}
                className="
                    hover:bg-bg-dark 
                    flex 
                    justify-start 
                    p-1.5
                "
            >
                Edit
            </span>

            <ActiveToggleDropdownItem 
                id={productId} 
                isAvailableForPurchase={isAvailableForPurchase}
            />
            <DeleteToggleDropdownItem 
                id={productId} 
                disabled={orders > 0}
            />
        </div>
    )
}

export default Dropdown;