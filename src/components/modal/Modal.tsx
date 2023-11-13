import "./Modal.scss";

import { useScrollLock } from "../../util/ScrollLock";
import closeIcon from "/images/modal/close_icon.svg";

import { ReactNode } from "react";

interface ModalProps {
  children?: ReactNode;
  closeAction: () => void;
}

const Modal = ({ children, closeAction }: ModalProps) => {

  const { unlockScroll } = useScrollLock();

  const handleClick = () => {
    closeAction()
    unlockScroll()
  }

  return (
    <div className="Modal__Backdrop">
      <div className="Modal">
        <button 
        className="Modal__Close" 
        onClick={handleClick}>
          <img
            className="Modal__Close__Icon"
            src={closeIcon}
            alt="Close modal icon"
          />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
