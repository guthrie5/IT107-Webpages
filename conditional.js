var likestotravel = false;

if (likestotravel === true) {
    console.log("Bon Voyage!");
} else if (likestotravel === false) {
    console.log("Enjoy your couch!");
}

var favoritefood = "pepperoni rolls";

if (favoritefood === "pepperoni rolls" || favoritefood === "fried pickles") {
    console.log("You have good taste!");
} else {
    console.log("Clearly you have not tried fried pickles or pepperoni rolls.");
}

if (1+1>5) {
    console.log("True fact!");
} else {
    console.log ("Lies!");
}

if (4*6<=20) {
    console.log("True fact!");
} else {
    console.log ("Lies!");
}

if (6-7>=0) {
    console.log("True fact!");
} else {
    console.log("Lies!");
}

var birthyear = 1995;

if (birthyear>=1966 && birthyear<=1976) {
    console.log("You're a Gen X'er buddy!");
} else if (birthyear>=1977 && birthyear<=1994) {
    console.log("You're a millennial!");
} else if (birthyear>=1995 && birthyear<=2012) {
    console.log("I feel bad for your generation my friend.");
}

var likesdogs = true;

if (likesdogs === true) {
    console.log("You're a dog person!");
} else {
    console.log("You're a cat person!");
}

var person = {
    name: "Michael",
    language: "French",
}

if (person.language === "English"){
    console.log("Hello,", person.name,"!");
} else if (person.language === "Spanish") {
    console.log("Hola,", person.name, "!");
} else if (person.language === "French") {
    console.log("Bonjour,", person.name, "!");
}