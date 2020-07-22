const packFormatter = packs => packs.map(pack =>({
  uuid: pack.uuid,
  unities: pack.unities,
  originalPrice: pack.original_price,
  currentPrice: pack.current_price,
  status: (pack.status === 'ACTIVE' ? true : false),
}));

const productFormatter = products => products.map(product => {
  return({
    uuid: product.uuid,
    name: product.name,
    image: product.image,
    vendor: product.vendors[0].vendor.name,
    packs: packFormatter(product.packs),
  });
});

export { productFormatter };