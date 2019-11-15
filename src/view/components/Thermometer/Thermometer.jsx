import React, { useContext } from 'react';
import './thermometer.scss';
import { Context } from '../../../config/Provider.js';

export const Thermometer = props =>{
  const context = useContext(Context);
  const { config } = context.state;

  const realPercentage = (config.current_value / config.target_value) * 100;

  //never go above 100%
  const mercuryPercentage = Math.min( 100, realPercentage);

  //12% is initial height.
  //So we will just add half of that to make it look realistic
  const mercuryHeight = mercuryPercentage - 6;
  return(
    <div className="thermometer">
      <div className="scale_wrapper">
        <div className="scale_line">
          <span className="scale_line_left"></span>
          <span className="scale_line_right"></span>
        </div>
        <div className="scale_line">
          <span className="scale_line_left"></span>
          <span className="scale_line_right"></span>
        </div>
        <div className="scale_line">
          <span className="scale_line_left"></span>
          <span className="scale_line_right"></span>
        </div>
        <div className="scale_line">
          <span className="scale_line_left"></span>
          <span className="scale_line_right"></span>
        </div>
        <div className="scale_line">
          <span className="scale_line_left"></span>
          <span className="scale_line_right"></span>
        </div>
        <div className="scale_line">
          <span className="scale_line_left"></span>
          <span className="scale_line_right"></span>
        </div>
        <div className="scale_line">
          <span className="scale_line_left"></span>
          <span className="scale_line_right"></span>
        </div>
        <div className="scale_line">
          <span className="scale_line_left"></span>
          <span className="scale_line_right"></span>
        </div>
        <div className="scale_line">
          <span className="scale_line_left"></span>
          <span className="scale_line_right"></span>
        </div>
        <div className="scale_line">
          <span className="scale_line_left"></span>
          <span className="scale_line_right"></span>
        </div>
        <div className="scale_line">
          <span className="scale_line_left"></span>
          <span className="scale_line_right"></span>
        </div>

        <div className="scale_wrapper_foooter_fixer"></div>
        <div className="mercury_column" style={{height:mercuryHeight+'%'}}></div>
      </div>

      <div className="sphere_wrapper">
        <div className="sphere_wrapper_fixer">
          <div className="mercury_bubble">
            <div className="mercury_shine">

            </div>
          </div>
        </div>


      </div>



    </div>
  )
}
