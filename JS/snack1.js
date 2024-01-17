console.log('S1-JS-OK');

//* Creazione di un array di oggetti per gli ospiti
const guestsList = guests.map((guest, i) => ({ tableName: tableName, guestName: guest, seatOccupied: i + 1 }));

//* Output sulla console
console.log('Lista degli invitati VIP con segnaposto: ', guestsList);
