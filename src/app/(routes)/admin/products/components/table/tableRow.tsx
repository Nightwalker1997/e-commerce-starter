'use client';

import { useState } from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEllipsisVertical, faX } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "./dropdown";

type TableRowProps = {
    head?: boolean;
    rowIsOdd?: boolean;
    id?: string;
    Name: String;
    Price: String;
    Orders: String;
    orderCount?:number;
    isAvailableForPurchase?: boolean;
}

const TableRow:React.FC<TableRowProps> = ({
    head,
    rowIsOdd,
    id,
    Name,
    Price,
    Orders,
    orderCount,
    isAvailableForPurchase
}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    // const dropdownClose = () => {
    //     setIsDropdownOpen(false);
    // }

    return(
        <tr
            className={clsx(`
                border
                border-bg-lightest
                mb-1.5
                py-2.5
                text-tx-base
                
                p-3 
                h-12
            `,
                head && "text-tx-base text-xl font-semibold",
                !head && rowIsOdd && "bg-bg-darker",
                !head && !rowIsOdd && "bg-bg-dark"

            )}
        >
            <th 
                className="w-8"
            >
                {!head && (
                    <>
                        <span className="sr-only">{
                            isAvailableForPurchase ? "Available" : "Unavailable"
                        }</span>
                        <FontAwesomeIcon 
                            icon={isAvailableForPurchase 
                                    ? 
                                        faCheck 
                                    : 
                                        faX
                                }
                            className="
                                px-3 
                                py-2.5
                                ml-2.5
                                my-2
                                border-[1px] 
                                border-bg-lighter 
                                rounded-full
                                bg-bg-light
                                flex
                                justify-center
                            "
                        />
                    </>
                )}
            </th>
            <th className="border-r border-bg-lightest mb-1.5">
                {Name}
            </th>
            <th className="border-r border-bg-lightest mb-1.5">
                {Price}
            </th>
            <th>
                {Orders}
            </th>
            <th 
                onClick={() => {setIsDropdownOpen(!isDropdownOpen)}}
                className="cursor-pointer relative"
            >
                {!head && (
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                )}
                {isDropdownOpen && 
                    <Dropdown 
                        productId={id!} 
                        isAvailableForPurchase={isAvailableForPurchase!}
                        orders={orderCount!}
                    />
                }
            </th>
        </tr>
    )
}

export default TableRow;