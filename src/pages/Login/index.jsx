import Form from "@/components/Form";

export default function Login() {
  return (
    <>
      <Form className="m-auto mt-5 w-25">
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Senha</label>
          <input type="password" className="form-control" />
        </div>
        <div className="mb-3">
          <button className="btn w-100 btn-primary">Entrar</button>
        </div>
      </Form>
    </>
  );
}
