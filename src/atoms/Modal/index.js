import React from 'react';
import {
  func, node,
} from 'prop-types';

import Style from './Modal.style';

const Modal = (props) => {
  const {
    backgroundClick, children,
  } = props;
  return (
    <Style.Container
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          backgroundClick();
        }
      }}
    >
      <Style.Dialog>
        <Style.Content>
          {children}
        </Style.Content>
      </Style.Dialog>
    </Style.Container>
  );
}

Modal.propTypes = {
  backgroundClick: func,
  children: node,
};

Modal.defaultProps = {
  backgroundClick: () => {},
  children: '',
};

export default React.memo(Modal);
