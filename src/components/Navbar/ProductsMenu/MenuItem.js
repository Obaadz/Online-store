import React from "react";

const MenuItem = ({ name, href }) => {
  return (
    <li>
      <a href={href}>{name}</a>
    </li>
  );
};

export default MenuItem;
