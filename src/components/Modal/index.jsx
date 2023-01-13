import { X } from 'phosphor-react';
import styles from './styles.module.css';

export function Modal({ onSetModal, children }) {
  function handleOutSideClick(event) {
    if (event.target.id === 'modal') onSetModal();
  }

  return (
    <div id="modal" className={styles.modal_container} onClick={handleOutSideClick}>
      <div className={styles.modal}>
        <button onClick={onSetModal} className={styles.button_modal}>
          <X size={28} color="#c4c4cc" className={styles.btn_close} />
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
}
