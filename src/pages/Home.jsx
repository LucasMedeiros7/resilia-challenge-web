import styles from './Home.module.css';
import { PoloCard } from '../components/PoloCard';
import { useFetch } from '../hooks/useFetch';
import { useState } from 'react';

const normalizeName = name =>
  name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

export function Home() {
  const { data: polos } = useFetch('polos');
  const [search, setSearch] = useState('');

  const filteredPolos =
    search.length > 0
      ? polos.filter(polo =>
          normalizeName(polo.name).includes(normalizeName(search))
        )
      : [];

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
        {search.length > 0
          ? filteredPolos?.map((polo, index) => (
              <PoloCard
                key={index}
                name={polo.name}
                quantity={polo.students.length}
              />
            ))
          : polos?.map((polo, index) => (
              <PoloCard
                key={index}
                name={polo.name}
                quantity={polo.students.length}
              />
            ))}
      </section>
    </main>
  );
}
