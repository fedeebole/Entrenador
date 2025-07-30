function mostrarDisciplina(deporte) {
  const contenido = document.getElementById('contenido-disciplina');
  let html = '';

  if (deporte === 'natacion') {
    html = `
      <h3>Natación</h3>
      <p>Entrenamiento en pileta 3 veces por semana.</p>
      <p><strong>Horarios:</strong> Lunes, Miércoles y Viernes - 7:00 a 8:30 hs</p>
    `;
  } else if (deporte === 'ciclismo') {
    html = `
      <h3>Ciclismo</h3>
      <p>Entrenamiento de ruta y montaña.</p>
      <p><strong>Horarios:</strong> Martes y Jueves - 6:30 a 8:00 hs</p>
    `;
  } else if (deporte === 'running') {
    html = `
      <h3>Running</h3>
      <p>Entrenamiento de resistencia y técnica de carrera.</p>
      <p><strong>Horarios:</strong> Sábados - 8:00 a 9:30 hs</p>
    `;
  }

  contenido.innerHTML = html;
}
