let person = {
    name: "Evgeny",
    age: 3,
    country: "Deutschland",
    logdata: function () {
        return person.name + " is " + person.age + " years old and he lives in " + person.country;
    },
    discountF: function () {
        let discount = "full price";

        if (person.age < 6) {
            discount = "child dicount"
        } else if (person.age < 26) {
            discount = "student dicount"
        } else if (person.age > 66) {
            discount = "senior dicount"
        }
        return discount;
    }
}

console.log(person.logdata());
console.log(person.discountF());

let largeCountries = [
    "Tuvalu",
    "India",
    "USA",
    "Indonesia",
    "Monaco"
]

largeCountries.shift();
largeCountries.unshift("China");
console.log(largeCountries);

largeCountries.pop();
largeCountries.push("Pakistan");
console.log(largeCountries);

function outputCountries() {
    for (let i = 0; i < largeCountries.length; i++) {
        console.log(largeCountries[i]);
    }
}
outputCountries();

function friday13() {
    let dayOfMonth = Math.round(Math.random() * 31);
    let weekday =  Math.round(Math.random() * 7);
    //console.log("dayOfMonth: " +dayOfMonth + " weekday: " + weekday)

    if (dayOfMonth === 13 && weekday === 5) {
        console.log("😱")
    }
}
friday13();