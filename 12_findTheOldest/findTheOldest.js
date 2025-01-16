const findTheOldest = function(people) {
    return people
    .reduce((oldestPerson, nextPerson) => {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        if(oldestPerson.yearOfDeath === undefined) oldestPerson.yearOfDeath = currentYear;
        if(nextPerson.yearOfDeath === undefined) nextPerson.yearOfDeath = currentYear;
        if(oldestPerson.yearOfDeath - oldestPerson.yearOfBirth < nextPerson.yearOfDeath - nextPerson.yearOfBirth) {
            oldestPerson = nextPerson;
        }
        return oldestPerson;
    });

};

// Do not edit below this line
module.exports = findTheOldest;
