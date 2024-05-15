'use client';

type CardsProps = {
    title: String;
    subtitle: String;
    body: String;
}

const Cards:React.FC<CardsProps> = ({
    title,
    subtitle,
    body
}) => {
    return(
        <div
            className="
                flex
                flex-col
                p-4
                mx-4
                bg-bg-base
                border-[1px]
                border-bg-darkest
                rounded-md
                shadow-lg
                shadow-bg-lighter
                cursor-pointer
                hover:shadow-bg-base
            "
        >
            <div 
                className="
                    flex
                    flex-col
                    items-start
                    border-b-[1px]
                    pb-2
                "
            >
                <div
                    className="
                        font-bold
                        text-2xl
                        text-tx-darkest
                    "
                >
                    {title}
                </div>
                <div
                    className="
                        font-light
                        text-sm
                        text-tx-dark
                    "
                >
                    {subtitle}
                </div>
            </div>
            <div
                className="
                    text-tx-base
                    py-2
                "
            >
                {body}
            </div>
        </div>
    )    
}

export default Cards;