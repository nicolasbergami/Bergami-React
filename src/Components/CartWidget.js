import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


export function  CartWidget ()  {
  
  return (
    <div className="cart-widget">
      {/* estoy usando FontAwesome para React. */}
      <div className="qty-display">0
      <FontAwesomeIcon icon={faCartShopping} size="2x" color="black" />
      </div>
    </div>
  );
};

export default CartWidget;