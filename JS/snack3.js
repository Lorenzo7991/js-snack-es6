console.log('S3-JS-OK');

/* //* Reducing to find min weighy obj
const minWeight = bicycleArray.reduce((minBike, currentBike) => {
    return currentBike.weight < minBike.weight ? currentBike : minBike;
});

//* Destructuring
const { brand, weight } = minWeight;
//* Console output
console.log(minWeight);
 */

const findMinimum = (array, key) => array.reduce((min, current) => current[key] < min[key] ? current : min, array[0]);

const minWeightBike = findMinimum(bicycleArray, 'weight');

const { brand, weight } = minWeightBike;

console.log('Oggetto minore: ', minWeightBike);