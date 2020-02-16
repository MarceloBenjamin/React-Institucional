import React from "react";
import { useSelector } from "react-redux";

export default function() {
  const dados = useSelector(state => ({ login: state.login.login }));

  return (
    <div>
      <h3>E-mail do usuário logado: {dados.login.email}</h3>
      <h3>Nível do usuário logado: {dados.login.nivel}</h3>
    </div>
  );
}
