import styled from 'styled-components';

import { device } from '../../styles/breakpoints';

export const Container = styled.div`
  width: 100%;
  height: 200px;
  box-shadow: 0px 1px 15px rgba(99, 99, 99, 0.2);
  border-radius:x 4px;
  padding: 16px 16px;
  margin: 16px 0px 0px 0px;

  @media ${device.tablet}{
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  @media ${device.mobile}{
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const HeaderPetition = styled.header`
  width: 100%;
  height: 32px;
  display: flex;
  margin-bottom: 16px;

  label:nth-child(2){
    margin-left: 10px;
  }
  @media ${device.mobile}{
    flex-direction: column;
    label:nth-child(2){
      margin-left: 0px;
    }
  }
`

export const LabelHeader = styled.label`
  min-width: 210px;
  height: 32px;
  background: #EDF6FD;
  border-radius: 4px;
  font-family: var(--font-primary);
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: var(--color-blue);
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.mobile}{
    margin: 5px 0px;
  }
`

export const StatusPetition = styled.label`
  font-family: var(--font-primary);
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: var(--color-orange-any);
`

export const DetailtPetition = styled.p`
  font-family: var(--font-primary);
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: var(--color-black);
  margin-top: 8px;
`

export const FooterPetition = styled.footer`
  width: 100%;
  height: 22px;
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const PublicationDate = styled.div`
  font-family: var(--font-primary);
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: var(--color-blue);
`

export const ViewPetition = styled.div`
  font-family: var(--font-primary);
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: var(--color-blue);
  display: flex;
  align-items: center;
  cursor: pointer;

  svg{
    margin-right: 10px;
  }
  label{
      cursor: pointer;
  }
`

export const ContentModal = styled.div`
  width: 100%;
  min-height: 350px;

  ul{
    width: 100% !important;
    border-bottom: 1px solid #f0f0f0;
  }

  
  ul li{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0px;

    label{
      font-weight: 500;
      color: var(--color-orange);
    }

    span{
      font-family: var(--font-primary);
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      color: var(--color-black);
    }
  }

  span{
      font-family: var(--font-primary);
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      color: var(--color-black);
  }

  p{
    margin-top: 10px;
  }
`;
