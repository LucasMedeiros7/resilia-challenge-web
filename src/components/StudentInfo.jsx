import { X } from 'phosphor-react';
import styles from './StudentInfo.module.css';

export function StudentInfo({ student }) {
  const { enrollment, name, email } = student;

  return (
    <ul className={styles.list}>
      <li>{enrollment}</li>
      <li>{name}</li>
      <li>{email}</li>

      <li className={styles.button_li_1}>
        <button>Transferir</button>
      </li>
      <li className={styles.button_li_2}>
        <button>
          <X size={28} className={styles.svg} weight="light" />
        </button>
      </li>
    </ul>
  );
}
