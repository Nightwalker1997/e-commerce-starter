'use client';

import TableRow from "./tableRow";
import { formatCurrency, formatNumber } from "@/libs/formatter";

type TableProps ={
    items: {
        id: string,
        name: string,
        priceInCents: number,
        isAvailableForPurchase: boolean,
        _count: { 
            orders: number
        }
    }[]
}

const Table:React.FC<TableProps> = ({
    items
}) => {
    return(
        <table 
            className="
                table-auto
                w-full
                
            "
        >
            <thead>
                <TableRow 
                    head
                    Name={"Name"}
                    Price={"Price"}
                    Orders={"Orders"}
                />
            </thead>
            <tbody>
                {items.map((item, index) => (
                    <TableRow
                        key={item.id}
                        rowIsOdd={index % 2 === 1}
                        id={item.id}
                        Name={item.name}
                        Price={formatCurrency(item.priceInCents)}
                        Orders={formatNumber(item._count.orders)}
                        orderCount={item._count.orders}
                        isAvailableForPurchase={item.isAvailableForPurchase}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default Table;