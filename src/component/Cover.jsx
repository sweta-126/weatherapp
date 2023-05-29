import React, { useEffect, useState } from 'react';
import './Cover.css';

const Cover = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => clearTimeout(timer); 
  }, []);

  return visible ? <div className="cover">Know your location's weather more precisely.</div> : null;
};

export default Cover;