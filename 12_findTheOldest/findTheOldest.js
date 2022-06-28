const findTheOldest = function(people) {
    function whichOlder(person1Death, person1Birth, person2Death, person2Birth) {
        if (person1Death - person1Birth > person2Death - person2Birth) {
            return true;
        } else {
            return false;
        }
    }

    return people.reduce((prevPerson, person) => {
        let prevPersonDeath = prevPerson.yearOfDeath;
        let personDeath = person.yearOfDeath;

        if (!prevPersonDeath) {
            prevPersonDeath = (new Date()).getFullYear();
        }
        if (!personDeath) {
            personDeath = (new Date()).getFullYear();
        }

        if (whichOlder(personDeath, person.yearOfBirth, prevPersonDeath, prevPerson.yearOfBirth)) {
            console.log(person);
            return person;
        } else {
            console.log(prevPerson);
            return prevPerson;
        }
    });
};

// Do not edit below this line
module.exports = findTheOldest;
