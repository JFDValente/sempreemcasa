import { generateArrayList } from '../../utils/array';

const getColumns = (columnsPerRow) => ({
  mobile: generateArrayList(columnsPerRow.mobile, () => '1fr').join(' '),
  tablet: generateArrayList(columnsPerRow.tablet, () => '1fr').join(' '),
  desktop: generateArrayList(columnsPerRow.desktop, () => '1fr').join(' '),
});

const getRowCount = (totalProducts, columnsPerRow) => ({
  mobile: Math.ceil(totalProducts / columnsPerRow.mobile),
  tablet: Math.ceil(totalProducts / columnsPerRow.tablet),
  desktop: Math.ceil(totalProducts / columnsPerRow.desktop),
});

export default {
  getColumns,
  getRowCount,
};
