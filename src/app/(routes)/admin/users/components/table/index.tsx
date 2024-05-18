'use client';

import TableRow from "./tableRow";
import { formatCurrency, formatNumber } from "@/libs/formatter";

type TableProps ={
    items: {
        id: string,
        email: string,
        orders: { 
            priceInCents: number
        }[]
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
                    Email={"Email"}
                    Orders={"Orders"}
                    Value={"Value"}
                />
            </thead>
            <tbody>
                {items.map((item, index) => (
                    <TableRow
                        key={item.id}
                        rowIsOdd={index % 2 === 1}
                        id={item.id}
                        Email={item.email}
                        Orders={formatNumber(item.orders.length)}
                        Value={formatCurrency(item.orders.reduce((sum, o) => o.priceInCents + sum, 0) / 100)}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default Table;