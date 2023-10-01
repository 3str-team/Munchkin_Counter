import { useState } from "react";
import { Input, Modal } from "../ui";
import { useSideCountStore } from "../../store/sideStore";

export const SideCount = () => {
  const { side, setCount, resetCount } = useSideCountStore();
  const [inputValue, setInputValue] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleClickSideCountBtn = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
    setInputValue("");
  };

  const handleChangeInput = (e) => {
    const value = e.target.value;
    if (/^-?\d*\.?\d*$/.test(value)) {
      setInputValue(value);
    }
  };

  const handleClickSaveCount = () => {
    setCount(Number(inputValue));
    handleCloseModal();
  };

  const handleCliclResetCount = () => {
    resetCount();
    handleCloseModal();
  };

  return (
    <section className="side-count__wrapper">
      <button className="side-count__btn btn" onClick={handleClickSideCountBtn}>
        Модификаторы
      </button>
      <Modal isOpen={isOpenModal} onClose={handleCloseModal}>
        <Modal.Header>Модификаторы</Modal.Header>
        <Modal.Body className="side-count__modal__body">
          <Input
            placeholder={side}
            inputMode="numeric"
            className="side-count__modal__input"
            value={inputValue}
            onChange={handleChangeInput}
          />
        </Modal.Body>
        <Modal.Footer>
          <div className="side-count__modal__actions">
            <button className="btn" onClick={handleCliclResetCount}>
              Сбросить
            </button>
            <button className="btn" onClick={handleClickSaveCount}>
              Сохранить
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </section>
  );
};
