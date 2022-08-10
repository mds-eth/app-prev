import React, { useState, useContext } from 'react';

import AuthContext from '../../contexts/AuthContext';

import { ReactComponent as LogoPrev } from '../../assets/logo-prev.svg';
import Modal from '../../components/Modal';

import { Container, ContentModal } from './styles';

function Header() {

  const { user, signOut } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);

  return (
    <React.Fragment>
      {openModal && (
        <Modal setOpenModal={setOpenModal} openModal={openModal} title={`Dados de usuário`}>
          <ContentModal>
            <div className="img-user">
              <img src={user?.urlImagemPerfil} alt="Imagem usuário" loading="lazy" />
            </div>
            <ul>
              <li>
                <span>Nome:</span>
                <label>{user?.nome}</label>
              </li>
              <li>
                <span>Email:</span>
                <label>{user?.email}</label>
              </li>
              <li>
                <span>Status:</span>
                <label>{user?.ativo ? 'ATIVO' : 'INATIVO'}</label>
              </li>
              <li>
                <span>Privilégio:</span>
                <label>{user?.privilegio}</label>
              </li>
              <li>
                <span>UUID:</span>
                <label>{user?.uuid}</label>
              </li>
              <li className="sign-out">
                <span></span>
                <label onClick={() => signOut()}>
                  <img src="https://static.thenounproject.com/png/2136118-200.png" id="icon-logoff" alt="icon logoff" loading="lazy" />
                  Deslogar
                </label>
              </li>
            </ul>
          </ContentModal>
        </Modal>)
      }
      <Container>
        <LogoPrev />
        <img onClick={() => setOpenModal(true)} src={user?.urlImagemPerfil} alt="Imagem usuário" loading="lazy" />
      </Container>
    </React.Fragment>
  )
}

export default Header;