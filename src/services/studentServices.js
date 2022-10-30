import api from './api';

async function addStudent(studentData) {
  try {
    const resposta = await api.post('/students', studentData, {
      headers: { 'Content-Type': 'application/json' }
    });
    return resposta.data;
  } catch (erro) {
    return erro.response.data;
  }
}

async function getStudentsByPoloId(polo_id) {
  try {
    const resposta = await api.get(`/students/${polo_id}`);
    return resposta.data;
  } catch (erro) {
    return erro.response.data;
  }
}

async function transferStudent({ enrollment, polo_id }) {
  try {
    const resposta = await api.patch(
      `/students/${enrollment}`,
      { polo_id },
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );
    return resposta.data;
  } catch (erro) {
    return erro.response.data;
  }
}

async function deleteStudent(enrollment) {
  try {
    const resposta = await api.delete(`/students/${enrollment}`, {
      headers: { 'Content-Type': 'application/json' }
    });
    return resposta.data;
  } catch (erro) {
    return erro.response.data;
  }
}

export { addStudent, getStudentsByPoloId, deleteStudent };
