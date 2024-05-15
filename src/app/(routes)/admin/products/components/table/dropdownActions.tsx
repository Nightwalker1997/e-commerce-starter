'use client';

import { useTransition } from "react";
import toggleProductAvailability from "../../../actions/toggleProductAvailability";
import DeleteProduct from "../../../actions/deleteProduct";
import { useRouter } from "next/navigation";
import Router from 'next/router';

export function ActiveToggleDropdownItem({
    id,
    isAvailableForPurchase
}:{
    id: string,
    isAvailableForPurchase: boolean
}) {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    
    return(
        <button 
            type="button"
            disabled={isPending}
            onClick={() => {
                startTransition(async () => {
                    await toggleProductAvailability(
                            id, 
                            !isAvailableForPurchase)
                })
                router.refresh();
            }}
            className="
                hover:bg-bg-dark 
                flex 
                justify-start 
                p-1.5
                border-none
                bg-bg-light 
                cursor-pointer
            "
        >
            {isAvailableForPurchase ? "Deactive" : "Active"}
        </button>
    )
}

export function DeleteToggleDropdownItem({
    id,
    disabled
}:{
    id: string,
    disabled: boolean
}) {
    const [isPending, startTransition] = useTransition();
    // const router = useRouter();
    return(
        <button 
            type="button"
            disabled={disabled || isPending}
            onClick={() => {
                startTransition(async () => {
                    await DeleteProduct(id)
                })
                // router.reload()

            }}
            className="
                hover:bg-red-base
                hover:tx-tx-lightest 
                flex 
                justify-start 
                p-1.5
                border-none
                bg-bg-light 
                cursor-pointer
            "
        >
            Delete
        </button>
    )
}