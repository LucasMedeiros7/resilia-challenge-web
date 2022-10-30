import { useFetch } from '../hooks/useFetch';
import { CaretLeft, Plus } from 'phosphor-react';
import { StudentInfo } from '../components/StudentInfo';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styles from './Polo.module.css';

export function Polo() {
  const { id } = useParams();
  const { state: poloName } = useLocation();

  const navigate = useNavigate();
  const { data: students } = useFetch(`http://localhost:3333/students/${id}`);

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
        <button>
          Adicionar novo aluno <Plus size={16} className={styles.svg} />
        </button>
      </header>

      <section className={styles.students}>
        {students?.map((student, key) => (
          <StudentInfo key={key} student={student} />
        ))}
      </section>
    </main>
  );
}
