// Code your solution in this file!

    
    
let scuberDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function() {
    return scuberDrivers.slice(0, -2)
}

const returnLastTwoDrivers = function() {
    return scuberDrivers.slice(2, 4)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(mult) {
    return function(num) {
        return (num * mult)
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

