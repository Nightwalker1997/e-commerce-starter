const CurrencyFormatter = new Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
    minimumFractionDigits: 0,
});

export function formatCurrency(amount: number){
    return CurrencyFormatter.format(amount);
}


const NumberFormat = new Intl.NumberFormat("en-US");

export function formatNumber(number: number){
    return NumberFormat.format(number);
}