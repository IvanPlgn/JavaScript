let name = "Ivan"
let name2 = "Vadim"

console.log(name)

let age = 34
console.log(age)

let person = name + " " + age
console.log(name + " " + age)

let user_age = 30
let work_period = 10
let total_time = user_age * work_period
console.log("total_time =", total_time, typeof(total_time))
console.log("total_time =" + total_time, typeof("total_time =" + total_time))

console.log("total_time =", total_time)

let morning = false
console.log("morning = ", morning, typeof(morning))

let evening = true
console.log("morning = ", evening, typeof(evening))

let apples = 15
let cherry = 5

let compare = apples >= cherry
console.log("compare =",compare)

if (compare){
    console.log("Compare is", compare)
} else if (apples == 15) {
    console.log("apples == ", apples)
} else {
    console.log("!!_Compare is", false)
}
