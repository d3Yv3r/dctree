export default function AdminSection({ title, children, lastSection }) {
  return (
    <>
      <h4 className="mt-3">{title}</h4>

      <section className="row align-item-button">{children}</section>

      {!lastSection && <hr />}
    </>
  );
}
