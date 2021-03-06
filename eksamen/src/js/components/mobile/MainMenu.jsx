import React from 'react';
import '../../../css/mobile/MainMenu.css';

const MainMenu = (props) => {



  return(
    <>
    <div className="homepage" id="menuCardContainer" data-render='mainMenu'>

      <div className="homepage" id="coffeeContainer" onClick={props.onClick} data-render="coffee">
        <p className="mainMenuText" onClick={props.onClick} data-render="coffee">COFFEE</p>
      </div>

      <div className="homepage" id="drinksContainer" onClick={props.onClick} data-render="drinks">
        <p className="mainMenuText" onClick={props.onClick} data-render="drinks">DRINKS</p>
      </div>

      <div className="homepage" id="foodContainer"  onClick={props.onClick} data-render="baked-goods">
        <p className="mainMenuText" onClick={props.onClick} data-render="baked-goods">BAKED GOODS</p>
      </div>
    </div>
    <div id="moveFooter"></div>
    </>
  )
}

export default MainMenu;