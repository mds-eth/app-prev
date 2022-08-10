import React, { useState } from 'react';

import { ReactComponent as LogoEye } from '../../assets/icon-eye.svg';

import Modal from '../../components/Modal';

import { Container, HeaderPetition, LabelHeader, StatusPetition, DetailtPetition, FooterPetition, PublicationDate, ViewPetition, ContentModal } from './styles';

function Petitions({ petition }) {

  const [petitionSel, setPetitionSel] = useState();
  const [openModal, setOpenModal] = useState(false);

  const setOpenModalPage = () => {
    setOpenModal(true);
    setPetitionSel(petition);
  }

  return (
    <React.Fragment>
      {openModal && (
        <Modal setOpenModal={setOpenModal} openModal={openModal} title="Detalhes petição">
          <ContentModal>
            <ul>
              <li>
                <span>Status:</span>
                <label>{petitionSel.status}</label>
              </li>
              <li>
                <span>Atualizado por:</span>
                <label>{petitionSel.atualizadoPor}</label>
              </li>
              <li>
                <span>Data criação:</span>
                <label>{new Date(petitionSel.dataDeCriacao).toLocaleString('pt-br')}</label>
              </li>
              <li>
                <span>Última atualização:</span>
                <label>{new Date(petitionSel.dataDaUltimaAtualizacao).toLocaleString('pt-br')}</label>
              </li>
              <li>
                <span>Tipo:</span>
                <label>{petitionSel.tipo}</label>
              </li>
              <li>
                <span>Tipo de ação:</span>
                <label>{petitionSel.tipoDeAcao}</label>
              </li>
              <li>
                <span>Tipo de processo:</span>
                <label>{petitionSel.tipoDeProcesso}</label>
              </li>
            </ul>
            <span>Resumo petição</span>
            <p>{petitionSel.resumo}</p>
          </ContentModal>
        </Modal>)
      }
      <Container>
        <HeaderPetition>
          <LabelHeader>{petition.tipo}</LabelHeader>
          <LabelHeader>{petition.tipoDeAcao}</LabelHeader>
        </HeaderPetition>
        <StatusPetition>{petition.status}</StatusPetition>
        <DetailtPetition>{petition.resumo.substring(0, 180)}...</DetailtPetition>
        <FooterPetition>
          <PublicationDate>Publicação: {window.innerWidth < 500 && <br />}{new Date(petition.dataDeCriacao).toLocaleString('pt-br')}</PublicationDate>
          <ViewPetition onClick={() => setOpenModalPage()}>
            <LogoEye />
            <label>Pré-visualizar petição</label>
          </ViewPetition>
        </FooterPetition>
      </Container>
    </React.Fragment>
  )
}

export default Petitions;