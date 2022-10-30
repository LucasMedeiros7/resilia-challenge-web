import { Warning } from 'phosphor-react';
import { deleteStudent } from '../../services/studentServices';

import styles from './RemoveStudent.module.css';

export function RemoveStudent({ onClose, enrollment, onDelete }) {
  function handleCancel(e) {
    e.preventDefault();
    onClose();
  }

  function handleRemove(e) {
    e.preventDefault();
    deleteStudent(enrollment)
      .then(onClose)
      .catch(err => console.log(err))
      .finally(onDelete);
  }

  return (
    <form className={styles.form_remove}>
      <div className={styles.warning}>
        <Warning className={styles.svg} size={32} weight="light" />
        <h2>Remover aluno</h2>
        <p>Tem certeza que deseja remover este aluno?</p>
      </div>

      <div className={styles.buttons}>
        <button type="submit" onClick={handleCancel} className={styles.btn_cancel}>
          Cancelar
        </button>

        <button type="submit" onClick={handleRemove} className={styles.btn_remove}>
          Sim, remover
        </button>
      </div>
    </form>
  );
}
