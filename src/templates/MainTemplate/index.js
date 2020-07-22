import React from 'react';
import {
  node,
  string,
} from 'prop-types';

import Style from './Style';

function MainTemplate({ title, children }) {
  return (
    <Style.Container>
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