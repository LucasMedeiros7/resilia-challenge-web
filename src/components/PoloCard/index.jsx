import { UserCircle } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';

import styles from './styles.module.css';

export function PoloCard({ polo, quantity }) {
  const { name: poloName, id } = polo;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/polos/${id}`, { state: poloName })}
      className={styles.card}
    >
      <h2>{poloName}</h2>

      <footer>
        <UserCircle size={19} color="#ffd000" weight="regular" />
        <p>
          Total de {quantity}
          {quantity === 1 ? ' aluno cadastrado' : ' alunos cadastrados'}
        </p>
      </footer>
    </div>
  );
}
