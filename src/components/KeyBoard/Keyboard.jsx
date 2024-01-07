import React from 'react';
import Keys from './Keys';

const Keyboard = () => {
  const line1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const line2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const line3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

  const renderKeys = (line, isBig = false) => (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: 0 }}>
      {line.map((char, index) => (
        <Keys key={`${char}_${index}`} letter={char} big={isBig && (char === 'Enter' || char === '巜')} />
      ))}
    </div>
  );

  return (
    <div>
      {renderKeys(line1)}
      {renderKeys(line2)}
      {renderKeys(['Enter', ...line3, '巜'], true)}
    </div>
  );
};

export default Keyboard;
