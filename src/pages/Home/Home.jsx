import styles from './Home.module.css';
import { useEffect, useState } from 'react';
import { PoloCard } from '../../components/PoloCard/PoloCard';
import { getAllPolos } from '../../services/poloServices';
import { normalizeName } from '../../utils/normalizeName';

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
        <h1 style={{ color: '#fff', marginTop: '50px' }}>Carregando...</h1>
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
