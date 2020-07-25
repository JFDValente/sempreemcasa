const formatCurrency = (value) => value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

const roundCurrency = (value) => parseFloat(value.toFixed(2));

export { formatCurrency, roundCurrency };
