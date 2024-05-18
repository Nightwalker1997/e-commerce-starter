'use client';

import { useState } from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "./dropdown";

type TableRowProps = {
    head?: boolean;
    rowIsOdd?: boolean;
    id?: string;
    Email: String;
    Orders: String;
    Value: String;
}

const TableRow:React.FC<TableRowProps> = ({
    head,
    rowIsOdd,
    id,
    Email,
    Orders,
    Value
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
           
            <th className="border-r border-bg-lightest mb-1.5">
                {Email}
            </th>
            <th className="border-r border-bg-lightest mb-1.5">
                {Orders}
            </th>
            <th>
                {Value}
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
                    />
                }
            </th>
        </tr>
    )
}

export default TableRow;