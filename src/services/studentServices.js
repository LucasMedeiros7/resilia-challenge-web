import api from './api';

async function addStudent(studentData) {
  console.log(studentData);
  try {
    const response = await api.post('/students', studentData, {
      headers: { 'Content-Type': 'application/json' }
    });

    return response.data;
  } catch (erro) {
    return erro.response.data;
  }
}

async function getStudentsByPoloId(polo_id) {
  try {
    const response = await api.get(`/students/${polo_id}`);
    return response.data;
  } catch (erro) {
    return erro.response.data;
  }
}

async function transferStudent({ enrollment, polo_id }) {
  try {
    const response = await api.patch(
      `/students/${enrollment}`,
      { polo_id },
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );
    return response.data;
  } catch (erro) {
    return erro.response.data;
  }
}

async function deleteStudent(enrollment) {
  try {
    const response = await api.delete(`/students/${enrollment}`, {
      headers: { 'Content-Type': 'application/json' }
    });
    return response.data;
  } catch (erro) {
    return erro.response.data;
  }
}

export { addStudent, getStudentsByPoloId, deleteStudent, transferStudent };
