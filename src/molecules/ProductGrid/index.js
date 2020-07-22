import helper from './helper';
import ProductCard from '../../atoms/ProductCard';
import Style from './ProductGrid.style';

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
product['uuid'] = 'e02967c2-056c-4016-a58a-faca7857c05f';
product['image'] = src;
product['name'] = 'Refrigerante Pepsi Twist 350 ml Lata';
product['vendor'] = 'PEPSI';
product['packs'] = packsMock;

const products = []
products.push(product);
products.push(product);
products.push(product);
products.push(product);
products.push(product);
products.push(product);
products.push(product);
products.push(product);

const columnsPerRow = { mobile: 1, tablet: 2, desktop: 4 };

function ProductGrid(props){
  const columns = helper.getColumns(columnsPerRow);
  const rowCount = helper.getRowCount(products.length, columnsPerRow);

  return (
    <Style.Container>
      <Style.Grid columns={columns} rowCount={rowCount}>
        {
          products.map((product) => (
            <ProductCard
              key={product.uuid}
              image={product.image}
              name={product.name}
              vendor={product.vendor}
              packs={product.packs}
            />
          ))
        }
      </Style.Grid>
    </Style.Container>

  );
}

export default ProductGrid;
