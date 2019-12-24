import styled from "styled-components";

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 550px;
  background: #ccc;
  position: absolute;
  top: 0;
`;

export const HeaderImage = styled.img`
  width: 100%;
  object-fit: cover;
  margin: 0;
`;

export const ContainerMenu = styled.div`
  background-color: rgba(5, 5, 5, 0.6);
  display: flex;
  padding-left: 7%;
  padding-right: 7%;
  position: absolute;
  right: 0;
  left: 0;
  border-bottom: 1px;
  border-bottom-color: rgba(255, 194, 153, 0.2);
  border-bottom-style: solid;
`;

export const Menu = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const MenuItem = styled.p`
  margin: 0;
  margin-right: 0;
  display: flex;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const MenuText = styled.p`
  margin-left: 20px;
  margin-right: 20px;
  color: #ffc299;
`;

export const Logo = styled.div`
  display: flex;
`;

export const LogoText = styled.p`
  margin: 15px;
  margin-right: 15px;
  margin-left: 0;
  color: #ffc299;
`;
