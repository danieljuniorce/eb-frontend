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
  RegisterTextError,
  ContainerLink,
  LinkRedirect
} from "./styled";

import api from "../../service/api";

import logo from "../../assets/img/logo.png";
import { FormButton } from "../Login/styled";

import { LoadingRegister } from "../../components/Loading";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      idInGame: "",
      discordName: "",
      username: "",
      email: "",
      password: "",
      birthday: "",
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

    const {
      name,
      idInGame,
      password,
      username,
      email,
      discordName,
      birthday
    } = this.state;

    try {
      const response = await api.post("user", {
        name,
        idInGame,
        password,
        username,
        email,
        discordName,
        birthday
      });

      console.log(response);
      this.setState({ loading: false, err: false });

      if (response.data.message) {
        this.setState({
          password: "",
          err: true
        });

        return;
      }

      setTimeout(() => this.setState({ loading: true }), 2500);

      this.setState({ loading: false, err: false });
      return this.props.history.push("/login");
    } catch (err) {
      this.setState({ loading: false, err: true });
      return;
    }
  }

  render() {
    return (
      <>
        <div
          style={{
            display: `${this.state.loading ? "flex" : "none"}`,
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            position: "absolute",
            width: "100%",
            height: "100%",
            color: "white"
          }}
        >
          <LoadingRegister />
          <h2>Cadastrado com Sucesso</h2>
        </div>
        <div style={{ display: `${this.state.loading ? "none" : ""}` }}>
          <Container>
            <LeftContainer>
              <Image src={logo} />
              <Title>Faça seu cadastro</Title>
              <TitleSub>Brasil Gaming Online</TitleSub>
              <div style={{ display: `${this.state.err ? "" : "none"}` }}>
                <RegisterTextError>
                  Error ao cadastrar, Verifique as informações foram digitadas
                  corretamentes!
                </RegisterTextError>
              </div>
              <Form onSubmit={e => this.handleSubmit(e)}>
                <FormGroup>
                  <FormLabel>
                    <RequiredInput>*</RequiredInput>
                    Nome Completo
                  </FormLabel>
                  <FormInput
                    type="text"
                    placeholder="Insirar seu nome completo"
                    name="name"
                    value={this.state.name}
                    onChange={e => this.handleInput(e)}
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
                    name="idInGame"
                    value={this.state.idInGame}
                    onChange={e => this.handleInput(e)}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <FormLabel>
                    <RequiredInput>*</RequiredInput>Usuário do Discord
                  </FormLabel>
                  <FormInput
                    type="text"
                    placeholder="Insirar seu nome no discord com id / Nome#120"
                    name="discordName"
                    value={this.state.discordName}
                    onChange={e => this.handleInput(e)}
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
                    name="username"
                    value={this.state.username}
                    onChange={e => this.handleInput(e)}
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
                    name="email"
                    value={this.state.email}
                    onChange={e => this.handleInput(e)}
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
                    name="password"
                    value={this.state.password}
                    onChange={e => this.handleInput(e)}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <FormLabel>
                    <RequiredInput>*</RequiredInput>Data de Nascimento
                  </FormLabel>
                  <FormInput
                    type="date"
                    placeholder="Digite sua senha novamente"
                    name="birthday"
                    value={this.state.birthday}
                    onChange={e => this.handleInput(e)}
                    style={{ textAlign: "center" }}
                    required
                  />
                </FormGroup>

                <FormButton>Cadastrar</FormButton>
              </Form>
              <ContainerLink>
                <LinkRedirect href="/login">
                  Já tem um conta? Acessar o Portal
                </LinkRedirect>
              </ContainerLink>
            </LeftContainer>
            <RightContainer>
              <TitleInfo>
                <span style={{ fontSize: "21pt" }}>Sejá Bem-vindo</span> a tela
                de cadastrado da plataforma online do Exército Brasileiro do
                Servidor Brasil Game Online.
              </TitleInfo>
              <TitleInfo>
                Todos os campos com <RequiredInput>*</RequiredInput> são
                obrigátorios!
              </TitleInfo>

              <TitleInfo>
                1. Já fez seu cadastrado? então espere sua aprovação, caso não
                sejá da corporação, seu ip será bloqueado nesse portal, e não
                poderar mais servir as força especiais no Servidor Brasil Game
                Online.
              </TitleInfo>
            </RightContainer>
          </Container>
        </div>
      </>
    );
  }
}

export default Register;
