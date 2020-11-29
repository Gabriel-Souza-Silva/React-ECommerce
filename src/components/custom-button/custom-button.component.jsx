import React from 'react';

//styled-components
import {CustomButtomContainer} from './custom-button.styles'

export default function CustomButton({children, ...props}) {
  return (
    <CustomButtomContainer {...props}>
        {children}
    </CustomButtomContainer>
  );
}
