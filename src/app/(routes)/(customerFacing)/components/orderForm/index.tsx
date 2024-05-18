'use client';

import Input from "@/components/ui/input";

const OrdersForm = () => {

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

    }
    
    return (
        <form onSubmit={handleSubmit} className="text-tx-base m-4 p-4 border-2 border-bg-lightest rounded-lg shadow-lg shadow-bg-light">
            <h1 className="text-3xl font-bold">
                MY Orders
            </h1>
            <p className="text-sm">
                Enter your email and we email you your order history amd download links
            </p>
            <Input label="Email" id="email" type="email"/>
            <button 
                type="submit"
                className="
                rounded-lg border border-bg-light py-2 font-bold
                w-full bg-bg-darkest text-base text-tx-lightest hover:shadow-lg hover:shadow-bg-lightest
                "
            >
                Send
            </button>
        </form>
    )
}

export default OrdersForm;