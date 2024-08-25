
import React, { useState } from 'react';
import "./index.css"

const Matrix = () => {
  const [clickOrder, setClickOrder] = useState([]);
  const [colors, setColors] = useState(Array(9).fill('white'));
  const [allBoxesClicked, setAllBoxesClicked] = useState(false);

  const handleClick = (index) => {
    if (!allBoxesClicked && !clickOrder.includes(index)) {
      const newClickOrder = [...clickOrder, index];
      setClickOrder(newClickOrder);

      setColors((prevColors) => {
        const updatedColors = [...prevColors];
        updatedColors[index] = 'green';
        return updatedColors;
      });

      if (newClickOrder.length === 9) {
        setAllBoxesClicked(true);
        changeToOrange(newClickOrder);
      }
    }
  };
  
  const changeToOrange = (order) => {
    order.forEach((index, i) => {
      setTimeout(() => {
        setColors((prevColors) => {
          const updatedColors = [...prevColors];
          updatedColors[index] = 'orange';
          return updatedColors;
        });
      }, i * 500);
    });
  };

  return (
    <div className='main-matrix-bg-container'>
        <div className="matrix">
      {Array.from({ length: 9 }).map((value, index) => (
        <div
          key={index}
          className="box"
          onClick={() => handleClick(index)}
          style={{ backgroundColor: colors[index] }}
        ></div>
      ))}
    </div>
    </div>
  );
}

export default Matrix;