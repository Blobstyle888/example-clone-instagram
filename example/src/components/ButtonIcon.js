import React from 'react';


const ButtonIcon = ({ iconSVG, isPadding }) => {
  return (
    <button type="button" className={isPadding ? "p-2" : ""}>
     {iconSVG}
    </button>
  );
};

export default ButtonIcon;