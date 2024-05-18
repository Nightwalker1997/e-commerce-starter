import Link from 'next/link';

const Expired = () => {
    return(
        <div className='flex flex-col items-center justify-center mt-48'>
            <h1 className='text-4xl mb-4 text-tx-base'>
                Download Link expired
            </h1>
            <Link href="/orders" className='border-2 border-bg-lightest rounded-lg cursor-pointer px-4 py-2 text-xl text-tx-base hover:bg-blue-base text-white'>
                Get New Link
            </Link>
        </div>
    )
}

export default Expired;