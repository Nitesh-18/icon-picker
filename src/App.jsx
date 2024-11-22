import React, { useState } from 'react';
import IconPicker from '../src/components/IconPicker'; 

const App = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [isPickerOpen, setPickerOpen] = useState(false);

  return (
    <div className="app-container">
      <div
        className="icon-display "
        onClick={() => setPickerOpen(true)}
      >
        {selectedIcon ? selectedIcon : 'Click to Pick an Icon'}
      </div>

      {isPickerOpen && (
        <IconPicker
          rowsInOnePage={4}
          columnsInOnePage={5}
          iconHeight={80}
          iconWidth={80}
          onSelect={(icon) => {
            setSelectedIcon(icon);
            setPickerOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default App;
