import React from 'react';
import '../../../css/POS/POS_Header.css';
import { posFooterIcons } from '../../database';


function POS_Header() {
  return (
    <div className="pos-header-container">
        <div id="headerMainBar">
          <h2 id="currentPageText">COFFEE</h2>
        </div>
      </div>
  );
}


export default POS_Header;