import clsx from "clsx";

export const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <section className="modal__overlay">
      <button className="modal__close btn" onClick={onClose}>
        <i className="bx bx-x"></i>
      </button>
      <section className="modal__window">{children}</section>
    </section>
  );
};

Modal.Header = ({ children, className, ...props }) => {
  return (
    <header {...props} className={clsx("modal__header", className)}>
      {children}
    </header>
  );
};

Modal.Body = ({ children, className, ...props }) => {
  return (
    <section {...props} className={clsx("modal__body", className)}>
      {children}
    </section>
  );
};

Modal.Footer = ({ children, className, ...props }) => {
  return (
    <footer {...props} className={clsx("modal__footer", className)}>
      {children}
    </footer>
  );
};
