function Alert(props: { type: string; message: string }) {
  return (
    <div
      className={`alert alert-${props.type.toLowerCase()} alert-dismissible fade show`}
      role="alert"
    >
      {<strong>{props.type}</strong>} {props.message}
      {/* <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button> */}
    </div>
  );
}
export default Alert;
