const atividade = {
  name: "Almoço",
  date: new Date("2024-07-08, 10:00"),
  finalizada: true
}
  //indice[0,1]
const atividades = [
  atividade, {
    name: 'Academia em grupo',
    date: new Date ("2024-07-09 12:00"),
    finalizada: false
  },
  {
    name: 'Gamming session',
    date: new Date ("2024-07-09 16:00"),
    finalizada: true
  },
]

const criarItemDeAtividade = (atividade) => {

  let input = '<input type="checkbox" '

  if(atividade.finalizada) {
    input += 'checked'
  }

  input += '>'

  return  `
  <div>
    ${input}
    <span>${atividade.name}</span>
    <time>${atividade.date}</time>
  </div>
  `
}

const section = document.querySelector('section');

for(let atividade of atividades) {
section.innerHTML += criarItemDeAtividade(atividade);
}
