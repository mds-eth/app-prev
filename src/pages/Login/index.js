import React, { useState, useEffect, useContext } from 'react';

import * as yup from 'yup';
import { Form, Alert } from 'antd';
import { useNavigate } from 'react-router-dom';

import AuthContext from '../../contexts/AuthContext';

import { ReactComponent as LogoPrev } from '../../assets/logo-prev.svg';
import { Container, ContainerBoxLogin, LabelInput, InputLogin, ForgotItPassword, ButtonSubmit } from './styles';

function Login() {

  useEffect(() => {
    localStorage.removeItem('[@auth-token]');
  }, []);

  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const [form] = Form.useForm();

  const [loginError, setLoginError] = useState(false);

  const schema = yup.object().shape({
    emailCpf: yup.string().required('Favor informar seu e-mail ou CPF.'),
    password: yup.string().required('Favor informar sua senha.')
  });

  const yupSync = {
    async validator({ field }, value) {
      await schema.validateSyncAt(field, { [field]: value });
    },
  };

  const handleSubmit = async () => {

    const response = await signIn(form.getFieldValue('emailCpf'), form.getFieldValue('password'));

    if (!response) {
      return setLoginError(true);
    }
    navigate('/dashboard');
  }

  return (
    <Container>
      <ContainerBoxLogin>
        <LogoPrev />
        <Form onFinish={handleSubmit} form={form} name="form-login" layout="vertical">
          <Form.Item name="emailCpf" label={<LabelInput htmlFor="input-email">E-mail ou CPF</LabelInput>} rules={[yupSync]}>
            <InputLogin id="input-email" type="text" placeholder="Digite seu email ou CPF" />
          </Form.Item>
          <Form.Item name="password" label={<LabelInput htmlFor="input-password">Senha</LabelInput>} rules={[yupSync]}>
            <InputLogin id="input-password" type="password" placeholder="Digite sua senha" />
          </Form.Item>
          <ForgotItPassword>Esqueceu a senha?</ForgotItPassword>
          <Form.Item>
            <ButtonSubmit type="primary" htmlType="submit">
              Entrar
            </ButtonSubmit>
          </Form.Item>
        </Form>
        {loginError && (
          <Alert message="Usuário ou senha inválidos." type="error" />
        )}
      </ContainerBoxLogin>
    </Container>
  )
}
export default Login;