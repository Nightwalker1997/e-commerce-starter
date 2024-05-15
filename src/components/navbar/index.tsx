'use client';

const Navbar = ({ 
    children 
}: Readonly<{
    children:React.ReactNode
}>) => {
    return(
        <nav
            className="
                bg-bg-base
                text-tx-base
                flex
                items-center
                justify-center
                px-4
                border-b-[1px]
                mb-2
                shadow-sm
            "
        >
            {children}
        </nav>
    )
}

export default Navbar;