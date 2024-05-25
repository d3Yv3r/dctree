import Form from "@/components/Form";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showError, setShowError] = useState({
    emailError: false,
    passwordError: false,
  });

  const handleError = () => {
    setShowError({
      emailError: false,
      passwordError: false,
    });

    if (!email) {
      setShowError((previousValue) => ({ ...previousValue, emailError: true }));
    }
    if (!password) {
      setShowError((previousValue) => ({
        ...previousValue,
        passwordError: true,
      }));
    }
  };

  const handleChange = (setState, value) => {
    setState(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleError();
  };

  return (
    <>
      <Form className="m-auto mt-5 w-25" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(event) => handleChange(setEmail, event.target.value)}
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
        <div className="mb-3">
          <label className="form-label">Senha</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
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
        <div className="mb-3">
          <button className="btn w-100 btn-primary">Entrar</button>
        </div>
      </Form>
    </>
  );
}
