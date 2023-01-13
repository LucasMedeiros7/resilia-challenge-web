import { Student } from 'phosphor-react';
import { useState } from 'react';
import { addStudent } from '../../services';
import styles from './styles.module.css';

export function AddStudent({ onClose, onAddStudent, poloId }) {
  const [studentData, setStudentData] = useState({
    name: '',
    email: '',
    polo_id: Number(poloId),
  });

  function handleCancel() {
    onClose();
  }

  async function handleAddStudent(e) {
    e.preventDefault();
    const response = await addStudent(studentData).finally(() => {
      onClose();
      onAddStudent();
    });
    if (response.message) return alert(response.message);
    alert('Aluna(o) foi adicionada(o) com sucesso');
  }

  return (
    <form className={styles.form_add_student}>
      <Student className={styles.svg} size={54} weight="light" />
      <h2>Adicionar nova aluna(o)</h2>
      <input
        type="text"
        placeholder="Digite o nome aqui"
        value={studentData.name}
        onChange={e => {
          setStudentData({
            ...studentData,
            name: e.target.value,
          });
        }}
      />
      <input
        type="text"
        placeholder="Digite o email aqui"
        value={studentData.email}
        onChange={e => {
          setStudentData({
            ...studentData,
            email: e.target.value,
          });
        }}
      />

      <div className={styles.buttons}>
        <button
          type="submit"
          onClick={handleCancel}
          className={styles.btn_cancel}
        >
          Cancelar
        </button>
        <button
          type="submit"
          onClick={handleAddStudent}
          className={styles.btn_add_student}
        >
          Adicionar
        </button>
      </div>
    </form>
  );
}
