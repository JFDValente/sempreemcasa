const formatDiscount = (discount, withSymbol) => `${discount.toFixed(0)}${withSymbol ? '%' : ''}`;

export { formatDiscount };
