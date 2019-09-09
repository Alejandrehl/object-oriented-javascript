let Developer = function(name, age, mainLanguage) {
    this.name = name;
    this.age = age;
    this.mainLanguage = mainLanguage;
};

Developer.prototype.presentation = function() {
    console.log(`Hi, i'm ${this.name}, and ${this.age} years old. My main programming language is ${this.mainLanguage}`);
};

const javaDeveloper = new Developer("Pedro", 32, "Java");
const javaScriptDeveloper = new Developer("Alejandro", 24, "JavaScript");
const pythonDeveloper = new Developer("David", 31, "Python");

javaDeveloper.presentation();
javaScriptDeveloper.presentation();
pythonDeveloper.presentation();