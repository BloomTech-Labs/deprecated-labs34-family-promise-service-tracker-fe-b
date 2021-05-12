import React from 'react';
import { Typography } from 'antd';

function TitleComponent({ TitleText }) {
  //Be sure to pass the TitleText in quotes when you render component
  const { Title } = Typography;
  return (
    <div className="title-container desktop-title">
      <h2 className="page-titles">{TitleText}</h2>
    </div>
  );
}

export default TitleComponent;
