import { Warning } from 'phosphor-react';
import { deleteStudent } from '../../services';

import styles from './styles.module.css';

export function RemoveStudent({ onClose, enrollment, onDelete }) {
  function handleCancel() {
    onClose();
  }

  function handleRemove() {
    deleteStudent(enrollment)
      .then(onClose)
      .catch(err => console.log(err))
      .finally(onDelete);
  }

  return (
    <div className={styles.container_remove}>
      <div className={styles.warning}>
        <Warning className={styles.svg} size={32} weight="light" />
        <h2>Remover aluna(o)</h2>
        <p>Tem certeza que deseja remover esta aluna(o)?</p>
      </div>

      <div className={styles.buttons}>
        <button onClick={handleCancel} className={styles.btn_cancel}>
          Cancelar
        </button>

        <button onClick={handleRemove} className={styles.btn_remove}>
          Sim, remover
        </button>
      </div>
    </div>
  );
}
