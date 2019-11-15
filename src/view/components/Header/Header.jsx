import React, { useContext } from 'react';
import './header.scss';
import { Context } from '../../../config/Provider.js';

export const Header = props =>{
  const context = useContext(Context);
  const { config } = context.state;

  return(
    <div className="header">
      { config.header_text }
    </div>
  )
}
