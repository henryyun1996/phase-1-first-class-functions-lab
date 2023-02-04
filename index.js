// Code your solution in this file!
const returnFirstTwoDrivers = function(arrayOne) {
    return arrayOne.slice(0, 2);
}
returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);

const returnLastTwoDrivers = function(arrayOne) {
    return arrayOne.slice(2, 4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier
    };
}


const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(arrayOne, fn) {
    if (fn === returnFirstTwoDrivers) {
        return arrayOne.slice(0,2)
    } else if (fn === returnLastTwoDrivers) {
        return arrayOne.slice(2, 4)
    };
}