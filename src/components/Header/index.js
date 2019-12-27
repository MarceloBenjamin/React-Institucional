import React from "react";

import {
  Container,
  ContainerMenu,
  Menu,
  MenuItem,
  MenuText,
  LogoText,
  Logo,
  Header,
  HeaderImage,
  Title
} from "./styles";

import image from "../../assets/img03.jpg";

export default function Main() {
  return (
    <Container>
      <Header>
        <HeaderImage src={image} />
      </Header>
      <ContainerMenu>
        <Logo>
          <LogoText>$$</LogoText>
          <LogoText>LOGO</LogoText>
        </Logo>
        <Menu>
          <MenuItem>
            <MenuText>Sobre</MenuText>
          </MenuItem>
          <MenuItem>
            <MenuText>Especialidades</MenuText>
          </MenuItem>
          <MenuItem>
            <MenuText>Localização</MenuText>
          </MenuItem>
          <MenuItem>
            <MenuText>Contato</MenuText>
          </MenuItem>
        </Menu>
      </ContainerMenu>
      <Title>
        WORKOUT <br /> FOR ALL
      </Title>
    </Container>
  );
}
