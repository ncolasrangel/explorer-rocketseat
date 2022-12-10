/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

const patients = [ // objeto com estrututa de dados de um array
    {
        name: "Nícolas",
        age: 23,
        weigth: 80,
        heigth: 1.94,
    },
    {
        name: "Vitória",
        age: 20,
        weigth: 70,
        heigth: 1.60,
    },
    {
        name: "João",
        age: 40,
        weigth: 95,
        heigth: 1.80,
    },
]

let patientNames = []

for (let patient of patients) {
  patientNames.push(patient.name)
}

console.log(patientNames);