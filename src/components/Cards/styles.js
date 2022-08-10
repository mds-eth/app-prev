import styled from 'styled-components';

import { device } from '../../styles/breakpoints';

export const Container = styled.div`
  width: 168px;
  height: 128px;
  box-shadow: 0px 1px 15px rgba(99, 99, 99, 0.2);
  border-radius: 4px;
  padding: 16px 0px 0px 16px;
  display: flex;
  flex-direction: column;

  @media ${device.mobile}{
    min-width: 168px;
  }
`;


export const HeaderCard = styled.header`
  width: 100%:
  height: 24px;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`

export const LabelCard = styled.label`
  font-family: var(--font-primary);
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: var(--color-black);
  padding-left: 8px;
`

export const CountCard = styled.span`
  width: 39.05px;
  height: 34px;
  font-family: var(--font-primary);
  font-weight: 600;
  font-size: 38px;
  line-height: 44px;
  align-items: center;
  color: ${props => props.colorCount};
  margin-bottom: 10px;
`

export const CountMonthCard = styled.span`
  font-family: var(--font-primary);
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: var(--color-grey);
`