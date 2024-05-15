'use client';

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from 'clsx';

const NavLink = (
    props: Omit<React.ComponentProps<typeof Link>, "className">
) => {

    const pathname = usePathname();

    return(
        <Link 
            {...props}
            className={clsx(`
                p-4
                hover:bg-bg-light
                hover:text-tx-light
                focus-visible:bg-bg-light
                focus-visible:text-tx-light
            `,
                pathname === props.href && "bg-bg-lighter text-tx-lighter"
            )}
        />
    )
}

export default NavLink;