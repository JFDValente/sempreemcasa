import { arrayOf, shape } from 'prop-types';

import helper from './helper';
import ProductCard from '../../atoms/ProductCard';
import Style from './Style';

const columnsPerRow = { mobile: 1, tablet: 2, desktop: 4 };

const ProductGrid = (props) => {
  const { products } = props;
  const columns = helper.getColumns(columnsPerRow);
  const rowCount = helper.getRowCount(products.length, columnsPerRow);

  return (
    <Style.Container>
      <Style.Grid columns={columns} rowCount={rowCount}>
        {
          products.map((product) => (
            <ProductCard
              key={product.uuid}
              uuid={product.uuid}
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

ProductGrid.propTypes = {
  products: arrayOf(shape()).isRequired,
};

export default ProductGrid;
