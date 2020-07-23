const formatCurrency = (value) => value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

const roundCurrency = (value) => value.toFixed(value, 2);

export { formatCurrency, roundCurrency };
