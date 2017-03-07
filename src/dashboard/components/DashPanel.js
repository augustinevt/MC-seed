import React from 'react';
import styles from '../dashboard.css';

const DashPanel = ({title, id}) => {
  return (
    <div id={ id } className={ styles.panel }>
      {title}
    </div>
  )
}

export default DashPanel;
