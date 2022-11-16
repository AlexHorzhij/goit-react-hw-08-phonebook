import { createPortal } from 'react-dom';
import { ModalForm } from '../ContactForm/ModalForm';
import styled from '@emotion/styled'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 1200;
  `;

const ModalWindow = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

const modalRoot = document.querySelector("#modal-root");

export const EditContactModal = () => {

    return createPortal(<Overlay >
        <ModalWindow >
            <ModalForm />
        </ModalWindow>
    </Overlay>, modalRoot);
};