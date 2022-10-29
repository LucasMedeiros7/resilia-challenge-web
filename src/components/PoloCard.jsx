import styles from './PoloCard.module.css';

export function PoloCard({ name, quantity }) {
  return (
    <div className={styles.card}>
      <h2>{name}</h2>

      <footer>
        <svg
          width="19"
          height="18"
          viewBox="0 0 19 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="9.5" cy="9" rx="9.5" ry="9" fill="#FFD51A" />
          <g clip-path="url(#clip0_12510_1986)">
            <path
              d="M12.4233 12.1155V11.4232C12.4233 11.056 12.2693 10.7038 11.9952 10.4441C11.7211 10.1845 11.3494 10.0386 10.9618 10.0386H8.03869C7.65106 10.0386 7.27931 10.1845 7.00522 10.4441C6.73113 10.7038 6.57715 11.056 6.57715 11.4232V12.1155"
              stroke="#202024"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.49962 8.654C10.3068 8.654 10.9612 8.03408 10.9612 7.26938C10.9612 6.50468 10.3068 5.88477 9.49962 5.88477C8.69244 5.88477 8.03809 6.50468 8.03809 7.26938C8.03809 8.03408 8.69244 8.654 9.49962 8.654Z"
              stroke="#202024"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>

        <p>
          Total de {quantity}{' '}
          {quantity === 1 ? 'aluno cadastrado' : 'alunos cadastrados'}
        </p>
      </footer>
    </div>
  );
}
