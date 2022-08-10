import styled from 'styled-components';

import { device } from '../../styles/breakpoints';

export const Container = styled.main`
  max-width: 745px;
  margin: 0 auto;
  min-height: 850px;

  @media ${device.tablet}{
    padding: 0px 20px;
  }
`;

export const ContainerCards = styled.section`
  width: 100%;
  height: 128px;
  margin-top: 32px;
  display: flex;
  align-items: center;

  @media ${device.mobile}{
    height: 148px;
    overflow-x: scroll;
  }

  div:nth-child(2){
    margin-left: 24px;
  }
  div:nth-child(3){
    margin-left: 24px;
  }
  div:nth-child(4){
    margin-left: 24px;
  }
`

export const TitlePetition = styled.p`
  font-family: var(--font-primary);
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  color: var(--color-black);
  margin-top: 61px;
`

export const ContainerPetitons = styled.section`
  width: 100%;
  margin-top: 19px;
`

