import React, { useState } from 'react';
import {
  node,
  string,
} from 'prop-types';

import { useModalAction, useModalState } from '../../bosons/Modal';

import TopBar from '../../organisms/TopBar';

import CartModal from '../../organisms/CartModal';

import Style from './Style';

function MainTemplate(props) {
  const { children } = props;
  const { modal } = useModalState();
  const [open, setOpen] = useState(false);
  useModalAction('SHOPPING-CART', open);

  const openModal = () => {
    setOpen(true);
  }

  const closeModal = () => {
    setOpen(false);
  }

  return (
    <Style.Container>
      <TopBar openModal={openModal}/>
      <Style.Content>
        {children}
      </Style.Content>
      {
        modal.modalType === 'SHOPPING-CART' && (
          <CartModal closeModal={closeModal}/>
        )
      }
    </Style.Container>
  );
}

MainTemplate.propTypes = {
  children: node,
  title: string,
};
  
MainTemplate.defaultProps = {
  children: null,
  title: '',
};
  
export default MainTemplate;