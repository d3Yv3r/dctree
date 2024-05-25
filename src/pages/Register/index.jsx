import { useState } from "react";
import Form from "../../components/Form";

export default function Register() {
  const [values, setValues] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showError, setShowError] = useState({
    nameError: false,
    lastNameError: false,
    emailError: false,
    passwordError: false,
    confirmPasswordError: false,
  });

  const handleError = () => {
    setShowError({
      nameError: false,
      lastNameError: false,
      emailError: false,
      passwordError: false,
      confirmPasswordError: false,
    });

    if (!values.name) {
      setShowError((previousValue) => ({ ...previousValue, nameError: true }));
    }
    if (!values.lastName) {
      setShowError((previousValue) => ({
        ...previousValue,
        lastNameError: true,
      }));
    }
    if (!values.email) {
      setShowError((previousValue) => ({ ...previousValue, emailError: true }));
    }
    if (!values.password) {
      setShowError((previousValue) => ({
        ...previousValue,
        passwordError: true,
      }));
    }
    if (!values.confirmPassword) {
      setShowError((previousValue) => ({
        ...previousValue,
        confirmPasswordError: true,
      }));
    }
  };

  const handleChange = (value, field) => {
    setValues({ ...values, [field]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleError();
  };

  return (
    <>
      <Form className="m-auto mt-5 w-25" onSubmit={handleSubmit}>
        <div className="mt-3">
          <label className="form-label">Nome</label>
          <input
            type="text"
            className="form-control"
            placeholder="Digite seu nome"
            value={values.name}
            onChange={(event) => handleChange(event.target.value, "name")}
            onBlur={() => handleError()}
          />
          <div
            className={
              showError.nameError
                ? "invalid-feedback d-block"
                : "invalid-feedback"
            }
          >
            Campo obrigatório!
          </div>
        </div>

        <div className="mt-3">
          <label className="form-label">Sobrenome</label>
          <input
            type="text"
            className="form-control"
            placeholder="Digite seu sobrenome"
            value={values.lastName}
            onChange={(event) => handleChange(event.target.value, "lastName")}
            onBlur={() => handleError()}
          />
          <div
            className={
              showError.lastNameError
                ? "invalid-feedback d-block"
                : "invalid-feedback"
            }
          >
            Campo obrigatório!
          </div>
        </div>

        <div className="mt-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Digite seu email"
            value={values.email}
            onChange={(event) => handleChange(event.target.value, "email")}
            onBlur={() => handleError()}
          />
          <div
            className={
              showError.emailError
                ? "invalid-feedback d-block"
                : "invalid-feedback"
            }
          >
            Campo obrigatório!
          </div>
        </div>

        <div className="mt-3">
          <label className="form-label">Senha</label>
          <input
            type="password"
            className="form-control"
            placeholder="Digite sua senha"
            value={values.password}
            onChange={(event) => handleChange(event.target.value, "password")}
            onBlur={() => handleError()}
          />
          <div
            className={
              showError.passwordError
                ? "invalid-feedback d-block"
                : "invalid-feedback"
            }
          >
            Campo obrigatório!
          </div>
        </div>

        <div className="mt-3">
          <label className="form-label">Confirmar senha</label>
          <input
            type="password"
            className="form-control"
            placeholder="Digite novamente sua senha"
            values={values.confirmPassword}
            onChange={(event) =>
              handleChange(event.target.value, "confirmPassword")
            }
            onBlur={() => handleError()}
          />
          <div
            className={
              showError.confirmPasswordError
                ? "invalid-feedback d-block"
                : "invalid-feedback"
            }
          >
            Campo obrigatório!
          </div>
        </div>

        <div className="mt-3">
          <button className="btn w-100 btn-primary">Entrar</button>
        </div>
      </Form>
    </>
  );
}
