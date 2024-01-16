console.log('S1-JS-OK');

//*Creating array obj for guests
const guestsList = guests.map((guest, index) => ({
    tableName: tableName,
    guestName: guest,
    //*For occupied number
    seatOccupied: index + 1,
}));

//*Console output
console.log('Lista degli invitati VIP con segnaposto: ', guestsList);