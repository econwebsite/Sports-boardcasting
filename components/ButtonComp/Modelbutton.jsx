import React, { useState } from 'react';
// import { Button } from 'antd';
import "./Modelbutton.css"
import Modelform from './Modelform';

const Modelbutton = ({
  text = 'Contact Us',
  backgroundColor = '#344ea1',
  animationColor = '#69ba2f',
  hoverColor = '#69ba2f',
  textColor = '#ffffff',
  className = '',
  productName = null,
  docName = null,
  type: formType = null,
  title = null,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const modalType = formType || (text === 'Contact Us' ? 'contact' : 'download');

  const showModal = () => {
    console.log("modalType", modalType);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <button className={`newanimation ${className}`}
        type="primary"
        style={{
          backgroundColor,
          '--animation-color': animationColor,
          '--hover-color': hoverColor,
          color: textColor
        }}
        onClick={showModal}
      >
        {text}
      </button>

      <Modelform
        visible={isModalVisible}
        onClose={handleCancel}
        type={modalType}
        productName={productName || null}
        docName={docName || null}
        buttonText={text}
        title={title || null}
      />
    </div>
  );
};

export default Modelbutton;
