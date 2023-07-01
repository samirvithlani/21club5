var students =[
    {
        name:"amit",
        age:23,
        gender:"Male",
        marks:30
    },
    {
        name:"jay",
        age:24,
        gender:"Male",
        marks:38
    },
    {
        name:"priya",
        age:24,
        gender:"FeMale",
        marks:29
    },
    {
        name:"Neha",
        age:30,
        gender:"FeMale",
        marks:54
    }
]

//using map function, foreach
//new array name uppercase,,  age / 2
//female...

// students.forEach((s)=>{
//     console.log(s)
// })


// students = students.map((s)=>{
//     return({
//         name:s.name.toUpperCase(),
//         age:s.age/2,
//         gender:s.gender,
//         marks:s.marks
//     })
// })
// console.log(students)

// students = students.filter((s)=>{

//     return s.gender ==="FeMale" && s.marks > 40
// })
// console.log(students)

//using filter function


function deleteStudent(name){


    return students.filter((s)=>{

        return s.name!==name
    })


}

x = deleteStudent("amit")
console.log("....",x)