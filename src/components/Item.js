import React, { useState } from "react";

function Item({ name, category }) {
  
  const [itemState, setItemState] = useState(false)
  const itemStatus = itemState ? "in-cart" : ""
  const itemTextStatus = itemState ? "Remove from cart" : "Add to Cart"

  function handleItem() {
    setItemState(!itemState)
  }
  
  return (
    <li className={itemStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleItem}>{itemTextStatus}</button>
    </li>
  );
}

export default Item;
