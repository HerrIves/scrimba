let person = {
    name:"Evgeny",
    age:35,
    country:"Deutschland",
    logdata: function(){
        return person.name + "is " + person.age + " years old and lives in " + person.country;
    }
}

console.log(person.logdata());