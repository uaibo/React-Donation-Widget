import React, { useContext } from 'react';
import './footer.scss';
import { Context } from '../../../config/Provider.js';

export const Footer = props =>{
  const context = useContext(Context);
  const { config } = context.state;

  return(
    <div className="footer">
      <div className="desc">
        { config.footer_text }
      </div>
      <div className="site">
        { config.website_name }
      </div>
    </div>
  )
}
