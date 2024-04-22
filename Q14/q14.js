"use strict";
// Q14: Just like with transportation, you can use an array to manage a list of guests. Loop through the list to send each one a personal invitation.
Object.defineProperty(exports, "__esModule", { value: true });
let guests = ["charlie", "thomas", "robert"];
guests.forEach(guests => {
    console.log(`Dear ${guests} would you like to join me for dinner?`);
});
