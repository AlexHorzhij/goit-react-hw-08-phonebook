import { createPortal } from 'react-dom';
import { Overlay, ModalWindow } from './EditContactModal.styled';
import { ModalForm } from '../ContactForm/ModalForm';


const modalRoot = document.querySelector("#modal-root");

export const EditContactModal = () => {

    return createPortal(<Overlay >
        <ModalWindow >
            <ModalForm />
        </ModalWindow>
    </Overlay>, modalRoot);
};