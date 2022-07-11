// JS objects are going to help store multiple pieces of data together in some sort of structure.

//Objects are collections of properties, propertires are a key-value pair.

//Rather than accessing data using an index, we use custom keys.

const fitBitData = {
    totalSteps : 308727,
    totalMiles: 211.9,
    avgCalorieBurn: 5755,
    workoutsThisWeek: '5 of 7',
    avgGoodSleep: '2:13',
};
//Values can be any type of variable
const person = {
    firstName: 'Mark', lastName: 'Jagger'
};

//Getting data out of objects
person['firstName'] //prints out 'Mark'
fitBitData.totalMiles //print out 211.9
