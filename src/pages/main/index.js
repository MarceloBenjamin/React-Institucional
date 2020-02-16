import React from "react";

import { Container } from "./styles";
import "./st.css";

// import Header from "../../components/Header/index";
import TopBar from "../../components/TopBar/index";
import Formulario from "../../components/Formulario/index";

export default function Main() {
  return (
    <Container>
      {/* <Header /> */}

      <TopBar />

      <Formulario />
    </Container>
  );
}
