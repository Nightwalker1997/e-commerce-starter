import Navbar from "@/components/navbar";
import NavLink from "@/components/navbar/navLink";
// don't save data in cache and be always dynamic so data can be up to date
// export const dynamic = "force-hynamic" //Error in build 

const AdminLayout = ({
    children
}: Readonly<{
    children: React.ReactNode
}>) => {
    return(
        <>
            <Navbar>
                <NavLink href="/admin/dashboard">Dashboard</NavLink>
                <NavLink href="/admin/products">Products</NavLink>
                <NavLink href="/admin/users">Customers</NavLink>
                <NavLink href="/admin/orders">Sales</NavLink>
            </Navbar>
            {children}
        </>
    )
}

export default AdminLayout;