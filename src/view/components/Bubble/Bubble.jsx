import React, { useContext } from 'react';
import './bubble.scss';
import { Context } from '../../../config/Provider.js';

export const Bubble = props =>{
  const context = useContext(Context);
  const { config } = context.state;

  const date = new Date();
  const month_index = date.getMonth();
  const year = date.getFullYear();

  return(
    <div className="bubble">
      <div className="goal">
        { config.currency_symbol }{ config.target_value }
        <small className="bubble_desc">
          { config.goal_text }
        </small>
      </div>
      <div className="divider"></div>
      <div className="raised">
        { config.currency_symbol }{ config.current_value }
        <small className="bubble_desc">
          { config.month_names[month_index] } { year }
        </small>
      </div>
    </div>
  )
}
