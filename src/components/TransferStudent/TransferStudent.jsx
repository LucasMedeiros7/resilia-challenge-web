import { UserSwitch } from 'phosphor-react';
import { transferStudent } from '../../services/studentServices';
import styles from './TransferStudent.module.css';

const poloOptions = [
  { id: 1, name: 'Rio de Janeiro' },
  { id: 2, name: 'São Paulo' },
  { id: 3, name: 'Belo Horizonte' },
  { id: 4, name: 'Vitória' },
  { id: 5, name: 'Brasília' },
  { id: 6, name: 'Porto Alegre' },
  { id: 7, name: 'Curitiba' },
  { id: 8, name: 'Maceió' },
  { id: 9, name: 'Salvador' },
  { id: 10, name: 'Goiânia' },
  { id: 11, name: 'Cuiabá' },
  { id: 12, name: 'Campo Grande' },
  { id: 13, name: 'Recife' }
];

export function TransferStudent({ onTransferStudent, onClose, enrollment }) {
  async function handleTransfer(e) {
    e.preventDefault();
    const select = document.querySelector('#polos');
    const { id } = poloOptions.find(polo => polo.name === select.value);

    await transferStudent({ enrollment, polo_id: id }).finally(() => {
      onClose();
      onTransferStudent();
    });

    alert('Aluno(a) foi transferido(a) com sucesso');
  }

  return (
    <form className={styles.form_transfer_student} onSubmit={handleTransfer}>
      <UserSwitch size={52} weight="light" />
      <header>
        <h2>Transferir aluna(o)</h2>
        <p>Escolha um polo para efetuar a tranferência</p>
      </header>
      <div className={styles.selects}>
        <label htmlFor="polos">Polos disponíveis</label>
        <select name="polos" id="polos">
          {poloOptions?.map(polo => {
            return (
              <option key={polo.id} value={polo.name.trim()}>
                {polo.name}
              </option>
            );
          })}
        </select>
        <button type="submit">Transferir</button>
      </div>
    </form>
  );
}
