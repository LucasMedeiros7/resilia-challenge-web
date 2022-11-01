import { useEffect, useState } from 'react';
import { CaretLeft, Plus } from 'phosphor-react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { Modal } from '../../components/Modal/Modal';
import { StudentInfo } from '../../components/StudentInfo/StudentInfo';
import { getStudentsByPoloId } from '../../services/studentServices';

import styles from './Polo.module.css';
import { AddStudent } from '../../components/AddStudent/AddStudent';

export function Polo() {
  const { id } = useParams();
  const { state: poloName } = useLocation();

  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [students, setStudents] = useState([]);
  const [modifyStudents, setModifyStudents] = useState(false);

  const navigate = useNavigate();

  function handleModal() {
    setIsVisibleModal(!isVisibleModal);
  }

  async function fetchData() {
    const response = await getStudentsByPoloId(id);
    setStudents(response);
  }

  function handleUpateStudents() {
    setModifyStudents(!modifyStudents);
  }

  useEffect(() => {
    fetchData();
  }, [modifyStudents]);

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>
          <CaretLeft
            size={42}
            weight="regular"
            className={styles.exit}
            alt="Voltar"
            onClick={() => navigate('/resilia-challenge-web')}
          />
          Polo - {poloName}
        </h1>
        <button onClick={handleModal}>
          Nova aluna(o)
          <Plus alt="novo aluno(a)" size={16} className={styles.svg} />
        </button>
      </header>

      <section className={styles.students}>
        {students?.map((student, key) => (
          <StudentInfo
            key={key}
            student={student}
            updateStudents={handleUpateStudents}
          />
        ))}
      </section>

      {isVisibleModal ? (
        <Modal onSetModal={handleModal}>
          <AddStudent
            onClose={handleModal}
            onAddStudent={handleUpateStudents}
            poloId={id}
          />
        </Modal>
      ) : null}
    </main>
  );
}
