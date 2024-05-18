'use client';

import { useRouter } from 'next/navigation';
import { DeleteToggleDropdownItem} from './dropdownActions';

type DropdownProps = {
    productId: string;
}

const Dropdown:React.FC<DropdownProps> = ({
    productId,
}) => {

    return(
        <div
            className="
                absolute
                flex 
                flex-col 
                
                bg-bg-light 
                font-light 
                text-tx-base
                w-24
                right-0
                z-30
                px-1.5
                py-1.5
            "
        >
            <DeleteToggleDropdownItem 
                id={productId} 
            />
        </div>
    )
}

export default Dropdown;