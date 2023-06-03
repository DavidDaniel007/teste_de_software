// Cria lista de alunos
const listaAluno = new Array (
  'Andre',
  'Antonio',
  'Beatriz',
  'David',
  'Diogo',
  'Fernando',
  'Geovanna',
  'Henrique',
  'Jaqueline',
  'Rafael'
)

// Empurra os dois novos nomes para dentro da lista
listaAluno.push('Francisco Jose','Marinilda Silva Pedrosa')
console.log(listaAluno)

// Remove o segundo nome e imprime a lista com a nova alteração
listaAluno.splice(1,1)
console.log(listaAluno)