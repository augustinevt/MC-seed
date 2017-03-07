import React from 'react';
import InventoryPanel from './InventoryPanel';
import MarketPanel from './MarketPanel';

const DashGrid = (props) => {
  return (
    <div style={{ margin: 'auto', border: 'solid', display: 'flexbox', flexDirection: 'row' }} >
      <InventoryPanel />
      <MarketPanel />
    </div>
  )
}

export default DashGrid;
