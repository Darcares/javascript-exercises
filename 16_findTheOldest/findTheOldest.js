const findTheOldest = function(people) {
    const sortedPeople = people.sort((personOne, personTwo) => {
        if (!("yearOfDeath" in personOne)) personOne.yearOfDeath = 2025;
        if (!("yearOfDeath" in personTwo)) personTwo.yearOfDeath = 2025;
        return (personTwo.yearOfDeath - personTwo.yearOfBirth) - (personOne.yearOfDeath - personOne.yearOfBirth);
    });
    return sortedPeople[0];
};

// Do not edit below this line
module.exports = findTheOldest;
