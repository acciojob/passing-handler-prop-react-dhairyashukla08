import React, { useState } from 'react';

const Selection = (props) => {
  const [style, updateSelectionStyle] = useState({ background: "" });
  const { applyColor } = props;

  return (
    <div 
      className="fix-box" 
      style={style} 
      onClick={() => applyColor(updateSelectionStyle)}
    >
      <h2 className="subheading">Selection</h2>
    </div>
  );
};

export default Selection;
