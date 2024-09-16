"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const input = (0, prompt_sync_1.default)();
let play_list = null;
let max_number = 0;
let run = true;
function begin() {
    while (run) {
        console.log(`Select an option:
        1. Open your playlist
        2. Add a song to your playlist
        3. Delete a song from your playlist
        4. Quit
        `);
        const choice = prompt('-> ');
        switch (choice) {
            case '1':
                open();
                break;
            case '2':
                add_song();
                break;
            case '3':
                delete_song();
                break;
            case '4':
                run = false;
                break;
            default:
                run = false;
                console.log("Please enter a valid input");
                break;
        }
    }
}
begin();
function open() {
    if (max_number === 0) {
        console.log("You have no songs on your playlist. Please add some.");
    }
    else {
        console.log(`Your playlist has ${max_number} of songs`);
    }
    let start = prompt(`Would you like to play a song? `);
    if (start === 'yes'.toLowerCase()) {
        play();
    }
    else {
        begin();
    }
}
function add_song() {
    if (play_list === null) {
        let song_one = prompt("Enter a song you would like on your playlist. ");
        let submitted_song = song_one;
        max_number += 1;
        let another_song = prompt("Would you like to add another song? yes/no ");
        if (another_song === 'yes'.toLowerCase()) {
            let song_two = prompt("Enter another song you would like on your playlist. ");
            let submitted_song_two = song_two;
            max_number += 1;
            let final_song = prompt("Would you like to add an final song? yes/no ");
            if (final_song === 'yes'.toLowerCase()) {
                let song_three = prompt("Enter a final song you would like on your playlist. ");
                let submitted_song_three = song_three;
                max_number += 1;
            }
        }
        else {
            begin();
        }
    }
    else if (max_number <= 3) {
        console.log(`You have ${max_number} of songs on your playlist`);
    }
    else {
        console.log("Your playlist can only support three songs for now. Please delete a song.");
    }
}
function delete_song() {
}
function play() {
}
