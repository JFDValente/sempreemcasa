import MainTemplate from '../../templates/MainTemplate';
import ProductCard from '../../atoms/ProductCard';

const src = 'https://cdn.shopify.com/s/files/1/0010/3150/3987/products/Refrigerante_Pepsi_Twist_350ml_Lata_2x_a17661dd-2787-4a55-9688-75aff906bc22.png?v=1567666266';
const packsMock = [
  {
    uuid: '5f6e9cd3-9b4f-4fb4-9a2b-adfa82f0cab8',
    unities: 12,
    originalPrice: 28.68,
    currentPrice: 22.68,
    status: true,
  },
  {
    uuid: 'e9f13825-d89a-45b4-8c5d-e189e57494e3',
    unities: 24,
    originalPrice: 57.36,
    currentPrice: 45.36,
    status: true,
  },
  {
    uuid: 'f180786d-7cb6-474e-bebf-941af3341937',
    unities: 36,
    originalPrice: 86.04,
    currentPrice: 68.04,
    status: true,
  },
];

const product = {};
product['image'] = src;
product['name'] = 'Refrigerante Pepsi Twist 350 ml Lata';
product['vendor'] = 'PEPSI';
product['packs'] = packsMock;

const Catalog = () => (
  <MainTemplate>
    <ProductCard
      product={product}
    />
  </MainTemplate>
);

export default Catalog;
