import { X } from 'phosphor-react';
import { Modal } from '../Modal/Modal';
import { useState } from 'react';
import { RemoveStudent } from '../RemoveStudent/RemoveStudent';

import styles from './StudentInfo.module.css';

export function StudentInfo({ student, onDelete }) {
  const { enrollment, name, email } = student;
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  function showModal() {
    if (modalContent === 'remove') {
      return (
        <RemoveStudent
          onClose={handleModal}
          enrollment={enrollment}
          onDelete={onDelete}
        />
      );
    } else if (modalContent === 'transfer') return <h1>Add</h1>;
  }

  function handleModal() {
    setIsVisibleModal(!isVisibleModal);
  }

  return (
    <>
      <ul className={styles.list}>
        <li>{enrollment}</li>
        <li>{name}</li>
        <li>{email}</li>

        <li className={styles.button_li_1}>
          <button
            onClick={() => {
              setModalContent('transfer');
              handleModal();
            }}
          >
            Transferir
          </button>
        </li>
        <li className={styles.button_li_2}>
          <button>
            <X
              size={28}
              className={styles.svg}
              weight="light"
              onClick={() => {
                setModalContent('remove');
                handleModal();
              }}
            />
          </button>
        </li>
      </ul>

      {isVisibleModal ? (
        <Modal onSetModal={handleModal}>{showModal()}</Modal>
      ) : null}
    </>
  );
}
