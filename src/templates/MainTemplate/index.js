import React from 'react';
import {
  node,
  string,
} from 'prop-types';
import TopBar from '../../organisms/TopBar';

import Style from './Style';

function MainTemplate({ title, children }) {
  return (
    <Style.Container>
      <TopBar />
      <Style.Content>
        {children}
      </Style.Content>
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