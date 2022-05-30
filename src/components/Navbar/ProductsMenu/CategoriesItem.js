import React from "react";

const CategoriesItem = ({
  name,
  href,
  data_id,
  setCurrentCategoryID,
  currentCategoryID,
}) => {
  function handleHoverIn() {
    setCurrentCategoryID(data_id);
  }

  return (
    <li
      onMouseEnter={handleHoverIn}
      className={currentCategoryID == data_id && "current"}
    >
      <a href={href}>{name}</a>
    </li>
  );
};

export default CategoriesItem;
