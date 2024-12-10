let characters = ["Harry","Hermoine", "Ron", "Draco", "Luna"]
for (let i = 1; i<=5; i++);{
    console.log(characters[i]);
}

let firstName = "Harry";
let house = "Gryffindor";
console.log("Welcome, {firstName,} of {house} !");

let characterName = "Hermione";
console.log(characterName. toLowerCase());
console.log(characterName. toUpperCase());

let spell = "Expelliarmus";
console.log(spell.trim())

let quote = 'I solemnly swaer that I am up to no good';
console.log(quote. slice(9,15))

let firstName = "Ron";
let lastName = "Weasley";
let fullName = firstName.concat('Weasley', lastName);
console.log(fullName);

let sentence = "Draco is a good wizard";
console.log(sentence.replace('good','bad'));

let houses = ["Gryffindor", "Hufflepuff", "Ravenclaw"];
houses.push('Slytherin');
houses.pop ();
console.log(houses);

let spells = ['Alohomora', 'Lumos', 'Nox'];
spells.unshift('Accio');
spells.shift();
console.log(spells);

let professors = ['Dumbledore', 'McGonagall', 'Snape', 'Hagrid'];
let newProfs = professors.slice(1,3);
console.log(newProfs);

let students = ['Neville', 'Seamus', 'Dean', 'Parvati',];
students.splice(1,2);
console.log(students);

let phrase = ' Mischief Managed ';
let result = phrase.trim().toLowerCase().concat(' - Harry');
console.log(result);

let wizards = ['Harry', 'Hermione', 'Ron'];
wizards.push('Luna', 'Draco');
console.log(wizards)

let message = 'Welcome to Hogwarts School of Witchcraft and Wizardry';
let substring = message.slice(11, 19); // Extracts 'Hogwarts' from the message
let result = substring.concat(' Castle');
console.log(result); 