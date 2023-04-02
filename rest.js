import React from 'react';
import FoodMenuItem from './FoodMenuItem';

function FoodMenuItem() {
  return (
    <div className="food-menu-item" id="rest">
      <div className="food-img">
        <img src="samak.jpg" alt="" />
      </div>
      <div className="food-description">
        <h2 className="food-titile">Samaki</h2>
        <p>
          Fresh from our natural Lake Chacha that remains unpolluted with toxins owing to its natural setting. Fish from this mighty Lake is tastier than never. 
        </p>
        <p className="food-price">Price: KSH. 200</p>
      </div>
    </div>
  );
}

export default FoodMenuItem;

import React from 'react';
import FoodMenuItem from './FoodMenuItem';

function FoodMenu() {
  return (
    <div className="food-menu">
      <FoodMenuItem />
    </div>
  );
}

export default FoodMenu;

