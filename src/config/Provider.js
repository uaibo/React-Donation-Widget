import React, { useState, createContext } from 'react';

export const Context = createContext();

const initialConfig = {
    header_text:      'We Need Your Support',
    goal_text:        'Monthly Goal',
    footer_text:      'Your donations are appreciated and help keep this community'+
                      'site running so we can all continue to enjoy using it.',
    website_name:     'GITHUB.COM',
    target_value:     750,
    current_value:    210,
    currency_symbol:  '$',
    month_names: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]
}

const Provider = props => {
   const [config, setConfig] = useState(initialConfig);

   const state = {
      config
   }

   return (
      <Context.Provider value={{
         state,
         setConfig
      }}>
         {props.children}
      </Context.Provider>
   );
};

export default Provider;
