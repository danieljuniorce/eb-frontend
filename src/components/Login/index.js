import React, { Component } from "react";
import {
  Container,
  Image,
  FormContainer,
  Title,
  TitleSub,
  Form,
  FormGroup,
  FormLabel,
  FormInput,
  FormButton,
  FooterInform,
  ContainerLink,
  LinkRedirect
} from "./styled";

import logo from "../../assets/img/logo.png";

class Login extends Component {
  render() {
    return (
      <Container id="app">
        <FormContainer>
          <Image src={logo} />
          <Title>ACESSAR PORTAL EB</Title>
          <TitleSub>Brasil Game Online</TitleSub>

          <Form>
            <FormGroup>
              <FormLabel id="email">E-mail</FormLabel>
              <FormInput
                type="email"
                placeholder="Insirar o seu E-mail"
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel id="password">Password</FormLabel>
              <FormInput
                type="password"
                placeholder="Insirar o sua senha secreta"
                required
              />
            </FormGroup>
            <FormButton type="submit">Acessar</FormButton>
          </Form>

          <ContainerLink>
            <LinkRedirect href="#cadastrar">Cadastrar</LinkRedirect>
            <LinkRedirect href="esqueci-senha">Esqueci a Senha</LinkRedirect>
          </ContainerLink>

          <FooterInform>
            * Qualquer informação nesse portal não tem nenhum vínculo com o
            Exército Brasileiro.
          </FooterInform>
        </FormContainer>
      </Container>
    );
  }
}

export default Login;
