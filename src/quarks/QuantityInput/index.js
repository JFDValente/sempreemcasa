import {
  number, func,
} from 'prop-types';

import Style from './Style';

const QuantityInput = (props) => {
  const { value, doIncrement, doDecrement } = props;
  return (
    <Style.Container>
      <Style.Button onClick={doDecrement}>
        <Style.Signal>
          {'-'}
        </Style.Signal>
      </Style.Button>
      <Style.Input
        type="number"
        max={999}
        min={1}
        value={value}
        readOnly
      />
      <Style.Button onClick={doIncrement}>
        <Style.Signal>
          {'+'}
        </Style.Signal>
      </Style.Button>
    </Style.Container>
  );
}

QuantityInput.propTypes = {
  value: number.isRequired,
  doIncrement: func.isRequired,
  doDecrement: func.isRequired,
}

export default QuantityInput;