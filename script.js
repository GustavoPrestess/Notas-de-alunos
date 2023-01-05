const students = [
{
  name: "Gustavo",
  notaOne: 10,
  notaTwo: 9,
},{
  name: "Cristiele",
  notaOne: 8,
  notaTwo: 9,
},{
  name: "Maristane",
  notaOne: 7,
  notaTwo: 9,
},{
  name: "Vitor",
  notaOne: 8,
  notaTwo: 6,
},{
  name: "Agnaldo",
  notaOne: 5,
  notaTwo: 7,
},{
  name: "Anthony",
  notaOne: 4,
  notaTwo: 7,
},{
  name: "Carol",
  notaOne: 5,
  notaTwo: 9,
},
]

function media(notaOne, notaTwo) {
  return ((notaOne + notaTwo) / 2).toFixed(1);
}

function results(student) {

  let mediaResult = media(student.notaOne, student.notaTwo)
  
  if (mediaResult >= 7) {
      return (`
      A média do(a) aluno(a) ${student.name} é: ${mediaResult} 
        Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`)

    } 
    else {
      return (`
      A média do(a) aluno(a) ${student.name} é: ${mediaResult} 
        Não foi dessa vez, ${student.name}! Tente novamente!`)

    }
  }

for (let student of students) {
  let result = results(student)
  alert(result)
}

