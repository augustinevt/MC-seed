import React from 'react';
import InventoryPanel from './InventoryPanel';
import MarketPanel from './MarketPanel';

const DashGrid = (props) => {
  return (
    <div style={{ margin: 'auto', border: 'solid', width: '400px', height: '200px', display: 'flexbox', 'align-item': 'center' }} >
      <InventoryPanel />
      <MarketPanel />

    </div>
  )
}

export default DashGrid;
