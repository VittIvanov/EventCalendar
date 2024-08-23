import React, { useRef, useEffect } from "react";
import { BackDrop } from "../../wrappers/backdrop/BackDrop";
import { Button } from "../../wrappers/button/Button";
import { PopupWrapper } from "../../wrappers/popup/PopupWrapper"
import CloseIcon from "../close-icon/index";
import { ModalWrapper } from "./styled";
import AuthorizationCard from "../authorization-card/index";

interface ModalProps {
  onClose: () => void
  children: React.ReactNode
  title: string
}

const Modal: React.FC<ModalProps> = ({ onClose, children, title }) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

  }, [onClose]);

  return (
    <BackDrop >
      <PopupWrapper ref={popupRef} >
        <CloseIcon onClose={onClose} />
        <ModalWrapper>
          <AuthorizationCard />
          {/* <h1 className="modal__title">{title}</h1>
          {children} */}
        </ModalWrapper>
      </PopupWrapper>
    </BackDrop>
  )
}

export default Modal;