'use client';

import { useTransition } from "react";
import DeleteUser from "../../../actions/deleteUser";

export function DeleteToggleDropdownItem({
    id,
}:{
    id: string,
}) {
    const [isPending, startTransition] = useTransition();
    // const router = useRouter();
    return(
        <button 
            type="button"
            disabled={ isPending }
            onClick={() => {
                startTransition(async () => {
                    await DeleteUser(id)
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