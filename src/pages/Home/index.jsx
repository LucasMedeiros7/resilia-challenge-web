import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { PoloCard } from '../../components/PoloCard';
import { getAllPolos } from '../../services';
import { normalizeName } from '../../utils/normalizeName';
import { SkeletonLoad } from '../../components/SkeletonLoad';

export function Home() {
  const [search, setSearch] = useState('');
  const [polos, setPolos] = useState([]);
  const [isFetching, setIsFechting] = useState(true);

  function filterPolos(polos, search) {
    const filterPolos = polos.filter(polo =>
      normalizeName(polo.name).includes(normalizeName(search))
    );
    return filterPolos;
  }

  async function fetchData() {
    const response = await getAllPolos().finally(() => setIsFechting(!isFetching));
    setPolos(response);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const filteredPolos = search.length > 0 ? filterPolos(polos, search) : polos;

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>Polos Resilia</h1>
        <input
          type="text"
          value={search}
          placeholder="Digite o nome do polo que você deseja?"
          onChange={e => {
            setSearch(e.target.value);
          }}
        />
      </header>
      {isFetching ? (
        <section className={styles.polos}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(card => (
            <SkeletonLoad />
          ))}
        </section>
      ) : (
        <section className={styles.polos}>
          {filteredPolos?.map((polo, index) => (
            <PoloCard key={index} polo={polo} quantity={polo.students.length} />
          ))}
        </section>
      )}
    </main>
  );
}
