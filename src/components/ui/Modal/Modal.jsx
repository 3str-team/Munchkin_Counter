import clsx from "clsx";
import { useRef } from "react";
import { Transition } from "react-transition-group";

export const Modal = ({ children, isOpen, onClose, onOverlayClick }) => {
  const modalRef = useRef(null);

  const handleOverlayClick = (e) => {
    const isModal = e.target.closest("[data-id=modal-window]");

    if (isModal) {
      return;
    }

    onOverlayClick();
  };

  return (
    <Transition
      in={isOpen}
      timeout={150}
      classNames={"modal"}
      nodeRef={modalRef}
    >
      {(state) => (
        <section
          className={clsx("modal__overlay", `modal-${state}`)}
          onClick={handleOverlayClick}
          ref={modalRef}
        >
          <button className="modal__close btn" onClick={onClose}>
            <i className="bx bx-x"></i>
          </button>
          <section className="modal__window" data-id={"modal-window"}>
            {children}
          </section>
        </section>
      )}
    </Transition>
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
