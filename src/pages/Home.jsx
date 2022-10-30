import styles from './Home.module.css';
import { PoloCard } from '../components/PoloCard';
import { useEffect, useState } from 'react';
import { getAllPolos } from '../services/poloServices';

const normalizeName = name => {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
};

const filterPolos = (polos, search) => {
  return polos.filter(polo =>
    normalizeName(polo.name).includes(normalizeName(search))
  );
};

export function Home() {
  const [search, setSearch] = useState('');
  const [polos, setPolos] = useState([]);

  async function fetchData() {
    try {
      const response = await getAllPolos();
      setPolos(response);
    } catch (e) {
      console.log(err);
    }
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

      <section className={styles.polos}>
        {filteredPolos?.map((polo, index) => (
          <PoloCard key={index} polo={polo} quantity={polo.students.length} />
        ))}
      </section>
    </main>
  );
}
