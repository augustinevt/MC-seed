import React from 'react';
import DashPanel from './DashPanel';
import styles from '../dashboard.css';

const DashGrid = (props) => {
  console.log(styles)

  const panels = [
    <DashPanel id='container2' title='Market Panel' />,
    <DashPanel id='container1' title='Inventory Panel' />,
  ];

  return (
    <div className={ styles.dashGrid } >
      {panels}
    </div>
  )
}

export default DashGrid;
