function yolochka(){
  let text_1 = "Hello World"
  console.log(text_1)
}

function yolochka_1(q1, q2){

  let result = q1 + q2
  console.log("Summ == " + result)
}

function yolochka_1(q1, q2){

 if (q1 > 4){

  let m_result = q2*10
  console.log(m_result)
 }
}

yolochka()
yolochka_1(5, 10)

function yolochka_3 (...arguments){
  let result = 0
  for (let arg of arguments) {
    result += arg
  }
  console.log(result)
}

yolochka_3(5, 10, 20, 45)


names = ['Alex', 'Inna', 'Ivan', 'Paul', 'Raul']

function names_editor(person_name){

  let name_1 = "Hello " + person_name + " !"
  console.log(name_1)
}

for (let i=0; i<names.length; i++){
  names_editor(names[i])
}


let f1 = () => console.log()

let t1 = 10
let t2 = 15
let t3 = 20

let summ = (n1, n2) => {console.log(`Summ = ${n1 + n2}`)}
summ(t1, t2)
