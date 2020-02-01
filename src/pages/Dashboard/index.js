import React, { Component } from "react";

import api from "../../service/api";
import {
  Container,
  Nav,
  NavMenu,
  NavItem,
  NavLink,
  NavImage,
  Content,
  TitleUser,
  ContainerGridUser,
  LeftGrid,
  RightGrid,
  UserInfo,
  UserInfoPlus,
  Birthday,
  Condinome,
  Name,
  DiscordName,
  Email,
  IdInGame,
  NamePatente,
  PatenteImg,
  Situation,
  Turno,
  HeaderInfo
} from "./styled";
import { logout, getToken } from "../../auth";
import { LoadingLogin } from "../../components/Loading";
import { Patentes } from "../../components/PatentesImg";
import logo from "../../assets/img/logo.png";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: getToken(),
      userId: this.props.history.location.state.userId,
      userInfo: {},
      loading: false
    };
  }

  async componentDidMount() {
    const { token, userId } = this.state;

    this.setState({ loading: true });
    try {
      const response = await api.get(`user/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const { data } = response;

      
      this.setState({ userInfo: data, loading: false });

      console.log(this.state);
    } catch (err) {
      logout();

      return this.history.push("/");
    }
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
          <h1 style={{ color: "white" }}>Carregando...</h1>
        </div>

        <Container
          style={{ display: `${this.state.loading ? "none" : "flex"}` }}
        >
          <Nav>
            <NavMenu>
              <NavImage src={logo} alt="logo" />

              <NavItem></NavItem>
              <NavItem>
                <NavLink href="/pg">Página Inicial</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/pg">Bate Ponto</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/pg">Atestado</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/pg">Relatório Indíviduais</NavLink>
              </NavItem>
            </NavMenu>
          </Nav>

          <TitleUser>MINHAS INFORMAÇÕES</TitleUser>
          <Content>
            <ContainerGridUser>
              <RightGrid>
                <HeaderInfo>
                  <PatenteImg src={Patentes.recruta} />
                  <UserInfo>
                    <NamePatente>
                      {this.state.userInfo.patente +
                        " " +
                        this.state.userInfo.condinome}
                    </NamePatente>
                    <Name>{this.state.userInfo.name}</Name>
                    <Situation>
                      Situação: {this.state.userInfo.situation}
                    </Situation>
                    <IdInGame>ID: {this.state.userInfo.idInGame}</IdInGame>
                  </UserInfo>
                </HeaderInfo>
                <UserInfoPlus>
                  <Birthday>
                    <strong>Data de Nascimento:</strong>{" "}
                    {this.state.userInfo.birthday}
                  </Birthday>
                  <Email>
                    <strong>Email Cadastrado:</strong>{" "}
                    {this.state.userInfo.email}
                  </Email>
                  <DiscordName>
                    <strong>Usuário do Discord:</strong>{" "}
                    {this.state.userInfo.discordName}
                  </DiscordName>
                </UserInfoPlus>
              </RightGrid>
              <LeftGrid>Hello World 2</LeftGrid>
            </ContainerGridUser>
          </Content>
        </Container>
      </>
    );
  }
}

export default Dashboard;
