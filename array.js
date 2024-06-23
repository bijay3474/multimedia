// array method

const asia=["Nepal","Bangladesh","India","Srilanka","Pakistan"]
console.log(asia)
const europe=["France","Germany","England","Portugal"]
console.log(europe)
//concat
const allCountries=asia.concat(europe)


//push and pop
const numbers=[1,2,3,4,5,6]
console.log(numbers)
numbers.push(89)


//splice
const provinces=["Koshi","Bagmati","Gandaki","Lumbini"]
console.log(provinces)
provinces.splice(1,0,"Madhesh","Darchula")
console.log(provinces)
const colleges=["SOE","HOE","Pulchowk","Patan"]
console.log(colleges)
const slicedcollege=colleges.slice(1,3)
console.log(slicedcollege)

//shift(),unshift()
const districts=["kathmandu","sarlahi","mohattari","sindhuli","chitwan"]
console.log(districts)
districts.shift()
console.log(districts)
districts.unshift("chitwan")
console.log(districts)


//index of
const faculty="BSCSIT"
const faculties=["BE","BSCCSIT","BIM","BSW"]
console.log(faculties)
const index=faculties.indexOf(faculty)
faculties.slice(index,1)

console.log(faculties)
//jtostring
const modifiedfaculty=faculties.toString()
console.log(modifiedfaculty)
//join
const joinedfaculties=faculties.join(" and ")
console.log(joinedfaculties)

//forrach()
//map()
//filter()




