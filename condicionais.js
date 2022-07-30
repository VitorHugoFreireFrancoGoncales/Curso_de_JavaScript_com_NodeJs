var me = {
    name: 'Daniel',
    age: 16
}

function ckeckAge (person) {
    console.log('A idade da pessoa é: ' + person.age)
    
    if (person.age >= 18) {
        console.log('A pessoa é maior de idade')
    } else {
        console.log('A pessoa não e maior de idade')
    }
}
ckeckAge(me)