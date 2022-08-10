import React from 'react';

import { ReactComponent as LogoClient } from '../../assets/logo-client-card.svg';
import { ReactComponent as LogoPetition } from '../../assets/logo-petition-card.svg';
import { ReactComponent as LogoCalc } from '../../assets/logo-calc-card.svg';
import { ReactComponent as LogoCases } from '../../assets/logo-cases-card.svg';

import { Container, HeaderCard, LabelCard, CountCard, CountMonthCard } from './styles';

function Cards({ card }) {

  let logoCard;
  let colorCount;

  switch (card?.tipo) {
    case 'CLIENTES':
      logoCard = <LogoClient />;
      colorCount = 'var(--color-card-client)';
      break;
    case 'PETICOES':
      logoCard = <LogoPetition />;
      colorCount = 'var(--color-orange)';
      break;
    case 'CALCULOS':
      logoCard = <LogoCalc />;
      colorCount = 'var(--color-card-count)';
      break;
    case 'CASOS':
      logoCard = <LogoCases />;
      colorCount = 'var(--color-card-cases)';
      break;
    default:
      logoCard = <LogoClient />;
      colorCount = 'var(--color-card-client)';
      break;
  }

  return (
    <Container>
      <HeaderCard>
        {logoCard}
        <LabelCard>{card?.label}</LabelCard>
      </HeaderCard>
      <CountCard colorCount={colorCount}>{card?.total}</CountCard>
      <CountMonthCard>Este mês: {card?.totalPeriodo?.mensal}</CountMonthCard>
    </Container>
  )
}

export default Cards;