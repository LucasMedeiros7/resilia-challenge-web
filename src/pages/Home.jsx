import styles from './Home.module.css';
import { PoloCard } from '../components/PoloCard';
import { useFetch } from '../hooks/useFetch';
import { useState } from 'react';

const normalizeName = name => {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
};

const filterPolos = (data, search) => {
  return data.filter(polo =>
    normalizeName(polo.name).includes(normalizeName(search))
  );
};

export function Home() {
  const { data } = useFetch('http://localhost:3333/polos');
  const [search, setSearch] = useState('');

  const polos = search.length > 0 ? filterPolos(data, search) : data;

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
        {polos?.map((polo, index) => (
          <PoloCard key={index} polo={polo} quantity={polo.students.length} />
        ))}
      </section>
    </main>
  );
}
