console.log('S3-JS-OK');

//* Reducing to find min weighy obj
const minWeight = bicycleArray.reduce((minBike, currentBike) => {
    return currentBike.weight < minBike.weight ? currentBike : minBike;
});

//* Destructuring
const { brand, weight } = minWeight;
//* Console output
console.log(minWeight);
