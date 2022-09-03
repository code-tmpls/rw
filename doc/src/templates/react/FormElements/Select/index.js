import React, { useEffect } from 'react';
import { SimpleHeader, Select } from 'e-ui-react';

export const SelectPage = () => {

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (<>
      <SimpleHeader title="Select / Dropdown" />
      <Select
         label="Select Theme"
         options={[{ id: 'light', label: 'Light Theme', value: 'Light' },
         { id: 'dark', label: 'Dark Theme', value: 'Dark' }]}
         className="navbar-layout"
         width="130"
         fontSize="12"
         onChange={(event) => {
            let option = event.target.value;
            let bgColor = (option === 'Dark') ? '#282a36' : '#fff';
            let color = (option === 'Dark') ? '#fff' : '#282a36';
            document.body.style.backgroundColor = bgColor;
            document.body.style.color = color;
         }}
      />
   </>);
};