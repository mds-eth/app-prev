import styled from 'styled-components';

import { Button, Input } from 'antd';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerBoxLogin = styled.div`
  width: 336px;
  height: 350px;

  svg{
    width: 102.89px;
    height: 34.24px;
    left: 472px;
    margin-bottom: 23px;
  }
`

export const LabelInput = styled.label`
  font-family: var(--font-primary);
  font-weight: 400;
  font-size: 16px !important;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: var(--color-grey);
`

export const InputLogin = styled(Input)`
  width: 336px;
  height: 40px;
  background: #FFFFFF;
  border: 1px solid var(--color-grey);
  border-radius: 4px;
  font-family: var(--font-primary);
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: var(--color-grey);
  margin-top: 8px;
  padding-left: 16px;

  span{
    width: 10px !important;
    height: 10px !important;
  }

  
`

export const ForgotItPassword = styled.p`
  font-family: var(--font-primary);
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: var(--color-blue);
  margin-top: 18px;
  cursor: pointer;
  `

export const ButtonSubmit = styled(Button)`
    width: 336px;
    height: 40px;
    background: var(--color-orange-any);
    border: 1px solid var(--color-orange-any);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    font-family: var(--font-primary);
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: var(--color-white);
    margin-top: 10px;
  `