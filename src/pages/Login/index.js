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
  LinkRedirect,
  LoginErrorText
} from "./styled";

import api from "../../service/api";
import { LoadingLogin } from "../../components/Loading";
import { login } from "../../auth";

import logo from "../../assets/img/logo.png";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loading: false,
      err: false
    };
  }

  handleInput(e) {
    const state = Object.assign({}, this.state);
    const campos = e.target.name;
    state[campos] = e.target.value;

    this.setState(state);
  }

  async handleSubmit(e) {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      this.setState({ loading: true, err: false });

      const response = await api.post("user/login", { email, password });

      if (response.data.message) {
        this.setState({ loading: false, err: true, password: "" });
        return;
      }
      this.setState({ loading: false, err: false });

      const { token, user } = response.data;

      console.log(token);

      login(token);
      return this.props.history.push({
        pathname: "/dashboard",
        state: { userId: user }
      });
    } catch (err) {}
  }

  render() {
    return (
      <>
        <div
          style={{
            position: "absolute",
            display: `${this.state.loading ? "flex" : "none"}`,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%"
          }}
        >
          <LoadingLogin />
          <h1 style={{ color: "white" }}>Entrando...</h1>
        </div>
        <Container
          style={{ display: `${this.state.loading ? "none" : "flex"}` }}
        >
          <FormContainer>
            <Image src={logo} />
            <Title>ACESSAR PORTAL</Title>
            <TitleSub>Brasil Gaming Online</TitleSub>
            <div style={{ display: `${this.state.err ? "" : "none"}` }}>
              <LoginErrorText>
                E-mail ou Senha foram digitados incorretamente ou não existe!
              </LoginErrorText>
            </div>
            <Form onSubmit={e => this.handleSubmit(e)}>
              <FormGroup>
                <FormLabel id="email">E-mail</FormLabel>
                <FormInput
                  type="email"
                  placeholder="Insirar o seu E-mail"
                  name="email"
                  value={this.state.email}
                  onChange={e => this.handleInput(e)}
                  required
                />
              </FormGroup>

              <FormGroup>
                <FormLabel id="password">Password</FormLabel>
                <FormInput
                  type="password"
                  name="password"
                  placeholder="Insirar o sua senha secreta"
                  value={this.state.password}
                  onChange={e => this.handleInput(e)}
                  required
                />
              </FormGroup>
              <FormButton type="submit">Acessar</FormButton>
            </Form>

            <ContainerLink>
              <LinkRedirect href="/register">Cadastrar</LinkRedirect>
              <LinkRedirect href="/password-reset">
                Esqueci a Senha
              </LinkRedirect>
            </ContainerLink>

            <FooterInform>
              * Qualquer informação nesse portal não tem nenhum vínculo com o
              Exército Brasileiro.
            </FooterInform>
          </FormContainer>
        </Container>
      </>
    );
  }
}

export default Login;
