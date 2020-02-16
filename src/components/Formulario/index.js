import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { Form, Button } from "react-bootstrap";
import * as yup from "yup";

import * as LoginActions from "../../store/actions/login";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required("O campo deve ser preenchido")
    .email("Informe um e-mail válido"),
  password: yup.string().required("O campo deve ser preenchido")
});

export default function Formulario() {
  const dispatch = useDispatch();

  const [chec, setChec] = useState([]);

  useEffect(() => {
    var arr = [];
    arr[2] = true;
    setChec(arr);
  }, []);

  function submit(login) {
    login = { ...login, nivel: login.nivel.indexOf(true) };
    dispatch(LoginActions.login(login));
  }

  function handleCli(id) {
    var arr = [];
    arr[chec.indexOf(true)] = false;
    arr[id] = true;
    setChec(arr);
  }

  return (
    <div>
      <h1>Formulário</h1>
      <Formik
        onSubmit={submit}
        validationSchema={validationSchema}
        initialValues={{
          email: "marcelo.dfx@gmail.com",
          password: "",
          nivel: chec
        }}
        enableReinitialize={true}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          errors,
          isSubmitting
        }) => (
          <div>
            <div>
              <Form.Group>
                <Form.Label>E-mail: </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <Form.Text className="text-muted">{errors.email}</Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label>Password: </Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <Form.Text className="text-muted">{errors.password}</Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Check
                  inline
                  type="radio"
                  label="Nivel 01"
                  name="nivel"
                  onClick={() => handleCli("1")}
                  checked={values.nivel[1]}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Nivel 02"
                  name="nivel"
                  onClick={() => handleCli("2")}
                  checked={values.nivel[2]}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Nivel 03"
                  name="nivel"
                  onClick={() => handleCli("3")}
                  checked={values.nivel[3]}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Nivel 04"
                  name="nivel"
                  onClick={() => handleCli("4")}
                  checked={values.nivel[4]}
                />
              </Form.Group>
              <Button
                onClick={handleSubmit}
                type="submit"
                // disabled={isSubmitting}
              >
                Submit
              </Button>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}
