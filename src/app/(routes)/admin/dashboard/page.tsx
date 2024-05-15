
import getProductsData from "../actions/getPruductData";
import getSalesData from "../actions/getSalesData";
import getUserData from "../actions/getUserDate";
import Cards from "@/components/cards";
import { formatNumber, formatCurrency } from '@/libs/formatter';


const AdminDashboard = async () => {
    const [salesData, usersData, productsData] = await Promise.all([
        getSalesData(),
        getUserData(),
        getProductsData(),
    ])

    return(
        <div
            className="
                grid
                grid-cols-1
                md:grid-cols-2
                lg:grid-cols-3
                gap-4
            "
        >
        
            <Cards 
                title={"Sales"} 
                subtitle={`${formatNumber(
                    salesData?.numberOfSales!
                )} Orders`} 
                body={formatCurrency(salesData?.amount!)}
            />

            <Cards 
                title={"Customers"} 
                subtitle={`${formatCurrency(
                    usersData?.averageValuePerUser!
                )} Average Value`} 
                body={`${formatNumber(usersData?.userCount!)} Users`}
            />

            <Cards 
                title={"Customers"} 
                subtitle={`${formatNumber(
                    productsData?.inactiveCount!
                )} Inactive`} 
                body={`${formatNumber(productsData?.activeCount!)} Active`}
            />
            
        </div>
    )
}

export default AdminDashboard;