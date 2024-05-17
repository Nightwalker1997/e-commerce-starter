'use client';

import { Product } from "@prisma/client";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, LinkAuthenticationElement, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Image from 'next/image';
import { formatCurrency } from "@/libs/formatter";
import { FormEvent, useState } from "react";

type CheckoutFormProps = {
    product: Product;
    clientSecret: string;
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

const CheckoutForm = ({
    product,
    clientSecret
}: CheckoutFormProps) => {

    return(
        <div
            className="
                w-11/12
                p-12
            "
        >
            <div 
                className="
                    flex 
                    gap-4 
                    items-center 
                    mb-8
                "
            >
                <div
                    className="
                        relative
                        w-1/3
                        flex-shrink-0
                        aspect-video
                    "
                >
                    <Image 
                        src={product.imagePath.replace('public/', "/")}
                        fill
                        alt={product.name}
                        className="object-cover rounded border-[1px] shadow-md shadow-bg-lightest"
                    />
                </div>
                <div className="text-tx-base">
                    <div className="text-lg">Price: {formatCurrency(product.priceInCents / 100)}</div>
                    <h1 className="text-2xl font-bold">Name: {product.name}</h1>
                    <div className="line-clamp-3 text-tx-light">Descriptaion: {product.description}</div>
                </div>
            </div>

            <Elements 
                options={{ clientSecret }} 
                stripe={stripePromise}
            >
                <Form 
                    priceInCents={product.priceInCents}
                    productId={ product.id }
                />
            </Elements>

        </div>
        
    )
}

export default CheckoutForm;


import userOrderExitst from '@/app/(routes)/(customerFacing)/actions/userOrderExitst';

const Form = ({
    priceInCents,
    productId
}:{
    priceInCents: number;
    productId: string;
}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string>()
    const [email, setEmail] = useState<string>()

    const hableSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if(stripe == null || elements == null || email == null) return;

        setIsLoading(true);

        // check if order exit in puchased products of user
        const orderExist = await userOrderExitst(email, productId);

        if(orderExist){
            setErrorMessage("You have already purchased!! try downloading it from the my orders page.")
            setIsLoading(false);
            return;
        }

        stripe.confirmPayment({
            elements, 
            confirmParams: {
                return_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/stripe/purchase-sucess`
        }}).then(({ error }) => {
            if(error.type === "card_error" || error.type === "validation_error"){
                setErrorMessage(error.message)
            }else{
                setErrorMessage("An unknown error occurred.")
            }
        }).finally(() => setIsLoading(false));
    }

    return (
        <form 
            onSubmit={hableSubmit}
            className="p-2 w-full border-tx-base text-tx-base rounded-md"
        >
            <div>
                <h1 className="text-2xl font-bold">Checkout</h1>
                {errorMessage && <div className="text-red-light">{errorMessage}</div>}
            </div>
            <div className="bg-tx-base p-3 rounded-xl border border-white my-5">
                <PaymentElement />
                <div className="mt-4">
                    <LinkAuthenticationElement onChange={e => setEmail(e.value.email)} />
                </div>
            </div>
            <button
                className="w-full bg-bg-darkest py-3 text-center border border-bg-lightest rounded-lg shadow my-5 text-xl hover:text-blue-base hover:shadow-tx-lightest"
            >
                {
                    isLoading ? "Purchasing..." : `Purchase - ${formatCurrency(priceInCents / 100)}`
                }
            </button>
  
        </form>
    )
}