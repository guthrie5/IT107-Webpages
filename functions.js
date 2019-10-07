function ilovejavascript() {
    console.log("I love JavaScript!")
}

ilovejavascript();

function dreamvaca(friendname, destination) {
    var dreamvacation;
    if (destination === "West") {
        dreamvacation = "San Francisco";
    } else if (destination === "North") {
        dreamvacation = "London";
    } else if (destination === "East") {
        dreamvacation = "Tokyo";
    } else {
        dreamvacation = "Buenos Aires";
    }
    var personaldreamvacation = `${friendname}'s dream vacation is to visit ${dreamvacation}!`;
    console.log(personaldreamvacation);
}

dreamvaca("Jake", "West");
dreamvaca("Lucy", "North");
dreamvaca("Amanda", "East");
dreamvaca("Carlos", "South");


function madepizza(crusttype, size, toppingsarray){
    var madepizza = `A ${size} pizza with ${crusttype} crust and ${toppingsarray.join (", ")} on top.`
    return madepizza;
}



var mypizza = madepizza("wheat", "large", ["green peppers", "onions", "pepperoni"]);

var yourpizza = madepizza("white", "medium", ["anchovies", "feta", "pineapple"]);

console.log(mypizza);

console.log(yourpizza);

function madetaco(typeofshell, toppingarray){
    var madetaco = `A taco with ${toppingarray.join (", ")} in it wrapped in a warm ${typeofshell} taco shell.`
    return madetaco;
}

var taco1 = madetaco("soft", ["chicken", "tomatoes", "lettuce", "cheese"]);

var taco2 = madetaco("hard", ["beef", "cheese", "onions"]);

console.log(taco1);

console.log(taco2);