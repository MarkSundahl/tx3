import React from 'react';

function Square(props) {
  return (
    <button className="square" onClick={() => {
      if (!props.value) {
        props.onMove();
      }
    }}>
      {props.value}
    </button>
  );
}

export default Square;