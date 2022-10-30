import { useEffect, useState } from 'react';
import { CaretLeft, Plus } from 'phosphor-react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { Modal } from '../../components/Modal/Modal';
import { StudentInfo } from '../../components/StudentInfo/StudentInfo';
import { getStudentsByPoloId } from '../../services/studentServices';

import styles from './Polo.module.css';

export function Polo() {
  const { id } = useParams();
  const { state: poloName } = useLocation();

  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [students, setStudents] = useState([]);
  const [wasDeleted, setWasDeleted] = useState(false);

  const navigate = useNavigate();

  function handleModal() {
    setIsVisibleModal(!isVisibleModal);
  }

  async function fetchData() {
    try {
      const response = await getStudentsByPoloId(id);
      setStudents(response);
    } catch (err) {
      console.log(err);
    }
  }

  function handleDeleted() {
    setWasDeleted(!wasDeleted);
  }

  useEffect(() => {
    fetchData();
  }, [wasDeleted]);

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>
          <CaretLeft
            size={42}
            weight="regular"
            className={styles.exit}
            alt="Voltar"
            onClick={() => navigate('/home')}
          />
          Polo - {poloName}
        </h1>
        <button onClick={handleModal}>
          Adicionar novo aluno <Plus size={16} className={styles.svg} />
        </button>
      </header>

      <section className={styles.students}>
        {students?.map((student, key) => (
          <StudentInfo key={key} student={student} onDelete={handleDeleted} />
        ))}
      </section>

      {isVisibleModal ? (
        <Modal onSetModal={handleModal}>
          <h1>Modal</h1>
        </Modal>
      ) : null}
    </main>
  );
}
