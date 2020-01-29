import React, { Component } from "react";

import {
  Container,
  LeftContainer,
  RightContainer,
  Image,
  Title,
  TitleSub,
  Form,
  FormGroup,
  FormInput,
  FormLabel,
  RequiredInput,
  TitleInfo,
  TittleBigInfo
} from "./styled";

import logo from "../../assets/img/logo.png";
import { FormButton } from "../Login/styled";

class Register extends Component {
  render() {
    return (
      <Container>
        <LeftContainer>
          <Image src={logo} />
          <Title>Faça seu cadastro</Title>
          <TitleSub>Brasil Game Online</TitleSub>
          <Form>
            <FormGroup>
              <FormLabel>
                <RequiredInput>*</RequiredInput>
                Nome Completo
              </FormLabel>
              <FormInput
                type="text"
                placeholder="Insirar seu nome completo"
                required
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>
                <RequiredInput>*</RequiredInput>ID Game
              </FormLabel>
              <FormInput
                type="number"
                placeholder="Insirar seu id da sua conta"
                required
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>
                <RequiredInput>*</RequiredInput>Usuário
              </FormLabel>
              <FormInput
                type="text"
                placeholder="Insirar seu usuário"
                required
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>
                <RequiredInput>*</RequiredInput>E-mail
              </FormLabel>
              <FormInput
                type="email"
                placeholder="Insirar um e-mail válido"
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>
                <RequiredInput>*</RequiredInput>Senha
              </FormLabel>
              <FormInput
                type="password"
                placeholder="Digite sua senha secreta"
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>
                <RequiredInput>*</RequiredInput>Confirmar Senha
              </FormLabel>
              <FormInput
                type="password"
                placeholder="Digite sua senha novamente"
                required
              />
            </FormGroup>

            <FormButton>Cadastrar</FormButton>
          </Form>
        </LeftContainer>
        <RightContainer>
          <TitleInfo>
            <span style={{ fontSize: "21pt" }}>Sejá Bem-vindo</span> a tela de
            cadastrado da plataforma online do Exército Brasileiro do Servidor
            Brasil Game Online.
          </TitleInfo>
          <TitleInfo>
            Todos os campos com <RequiredInput>*</RequiredInput> são
            obrigátorios!
          </TitleInfo>

          <TitleInfo>
            1. Já fez seu cadastrado? então espere sua aprovação, caso não sejá
            da corporação, seu ip será bloqueado nesse portal, e não poderar
            mais servir as força especiais no Servidor Brasil Game Online.
          </TitleInfo>
        </RightContainer>
      </Container>
    );
  }
}

export default Register;
