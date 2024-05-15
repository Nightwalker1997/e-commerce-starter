import Navbar from "@/components/navbar";
import NavLink from "@/components/navbar/navLink";
// don't save data in cache and be always dynamic so data can be up to date
export const dynamic = "force-hynamic"

const AdminLayout = ({
    children
}: Readonly<{
    children: React.ReactNode
}>) => {
    return(
        <>
            <Navbar>
                <NavLink href="/">Home</NavLink>
                <NavLink href="/products">Products</NavLink>
                <NavLink href="/orders">My Orders</NavLink>
            </Navbar>
            {children}
        </>
    )
}

export default AdminLayout;