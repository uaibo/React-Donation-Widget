import React from 'react';
import './style.scss';
import Provider from '../config/Provider';

import { Thermometer } from './components';
import { Header } from './components';
import { Bubble } from './components';
import { Footer } from './components';

const View = props => {
   return (
     <Provider>
       <div className="donations_widget">
         <div className="widget_left">
           <Thermometer/>
         </div>
         <div className="widget_right">
           <Header/>
           <Bubble/>
           <Footer/>
         </div>
       </div>
     </Provider>
   );
}
export default View;
