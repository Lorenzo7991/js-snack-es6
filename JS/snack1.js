console.log('S1-JS-OK');

//* Creating array mapped for guests
const guestsList = guests.map((guest, i) => ({ tableName: tableName, guestName: guest, seatOccupied: i + 1 }));

//* Console output
console.log('Lista degli invitati VIP con segnaposto: ', guestsList);
