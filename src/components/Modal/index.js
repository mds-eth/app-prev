import React from 'react';

import { Modal } from "antd";

function ModalComponent({ setOpenModal, openModal, title, children }) {

  const handleOkOrClose = () => {
    setOpenModal(false);
  }

  return (
    <Modal title={title} visible={openModal} onOk={handleOkOrClose} cancelButtonProps={{ style: { display: 'none' } }} onCancel={handleOkOrClose} cancelText="Cancelar">
      {children}
    </Modal>
  )
}

export default ModalComponent;