function makePalace (husband, wife) {
    wife.forlove = husband;
    husband.forlove = wife;

    return {
        person1: husband,
        person2: wife 
    };
}
let builtPalace = makePalace ({ name: "Shah Jahan"}, { name: "Mumtaz Mahal"});
console.log(builtPalace.person1.forlove.name);

delete builtPalace.person2;
console.log (builtPalace.person2);

delete builtPalace.person1.forlove;
console.log(builtPalace.person1);


function simulatePregnancy(husband, wife) {
    wife.isPregnant = true;
    husband.child = { name: "Newborn" };

    return {
        parent1: husband,
        parent2: wife
    };
}

let family = simulatePregnancy({ name: "Father" }, { name: "Mother" });
console.log("Before 'death':", family.parent1.child.name);

delete family.parent2;

console.log("After 'death':", family.parent1.child.name);

console.log(family.parent2);

