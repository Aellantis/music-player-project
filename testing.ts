import PromptSync from "prompt-sync";
const prompt = PromptSync ();
let max_number = 0;

let play_list:string | null= null;
let run = true;
let song_list:string[] = [];


while (run) {
        console.log (`Select an option:
         1. Open your playlist
         2. Add a song to your playlist
         3. Delete a song from your playlist
         4. Quit`);
        const input = prompt('-> ');
    
        switch (input) {
            case '1':
                open();
                break;
            case '2':
                add_song ();
                break;
            case '3':
                delete_song ();
                break;
            case '4':
                run = false;
                break;
            default:
                run = false;
                console.log ("Please enter a valid input")
                break;
        }
    }


function open() {
    if (max_number === 0) {
        console.log ("You have no songs on your playlist. Please add some.")
    }if (max_number > 0){
        console.log (`Your playlist has ${max_number} song(s)`)
        let start = prompt (`Would you like to play a song? yes/no `)
        if (start === 'yes'.toLowerCase()){
        play ()
        }
    else if (start === 'no'){
        console.log('Okay. We can do something else then.')
    } else {
        console.log ('Please enter a valid input')
        return;
    }
}
}


function add_song(){
    if (play_list === null && max_number < 3) {
        let song_one = prompt ("Enter a song you would like on your playlist. ")
        song_list.push(song_one)
        max_number+= 1
        play_list !== null;
        let another_song = prompt("Would you like to add another song? yes/no ")
        if (another_song === 'yes'.toLowerCase() && max_number < 3){
            let song_two = prompt ("Enter another song you would like on your playlist. ")
            song_list.push(song_two);
            max_number+= 1

        } else if (another_song === 'no'.toLowerCase()){
            console.log ("No worries! Let's go back to the menu")
        }
        else {
            console.log (`Your playlist has ${max_number} song(s)`)
        }
        if (another_song === 'yes' && max_number === 2){
            let final_song = prompt("Would you like to add an final song? yes/no ")
        if (final_song === 'yes'.toLowerCase() && max_number < 3){
            let song_three = prompt ("Enter a final song you would like on your playlist. ")
            song_list.push(song_three);
            max_number+= 1
            }
        }
    }
     if (max_number <= 3 && max_number > 1) {
        console.log (`You have ${max_number} of songs on your playlist`)
    } if (max_number >= 3) {
        console.log ("Your playlist can only support three songs for now. Please delete a song if you want to add a new one.")
    }
}

function delete_song(){
    if  (song_list[0] === undefined) {
        console.log ("You don't have any songs to delete because your playlist is empty. Please add songs.")
    } else {
        console.log (`Which song would you like to delete?:`)
        if (song_list.length > 0) {
            console.log(`1. ${song_list[0]}`)
            max_number-=1
        }
        if (song_list.length > 1) {
            console.log(`2. ${song_list[1]}`);
            max_number-=1
        }
        if (song_list.length > 2) {
            console.log(`3. ${song_list[2]}`);
            max_number-=1
        }
        const input= prompt (`--> `)
    switch (input) {
        case '1':
            song_list.splice(0,1)
            console.log(`Deleted song ${song_list[0]} from playlist`)
            break;
        case '2':
            song_list.splice(1,1)
            console.log(`Deleted song ${song_list[1]} from playlist`)
            break;
        case '3':
            song_list.splice(2,1)
            console.log(`Deleted song ${song_list[2]} from playlist`)
            break;
        default:
            console.log ("Please enter a valid input. ")
            break;
    }

    }

}

function play (){
    if  (song_list[0] === undefined) {
        console.log ("You don't have any songs to play because your playlist is empty. Please add songs.")
        return;
    } else {
        console.log (`Which song would you like to play:`)
        if (song_list.length > 0) {
            console.log(`1. ${song_list[0]}`)
        }
        if (song_list.length > 1) {
            console.log(`2. ${song_list[1]}`)
        }
        if (song_list.length > 2) {
            console.log(`3. ${song_list[2]}`);
        }
        const input= prompt (`--> `)
    switch (input) {
        case '1':
            console.log(`Now playing: ${song_list[0]}`)
            break;
        case '2':
            console.log(`Now playing: ${song_list[1]}`)
            break;
        case '3':
            console.log(`Now playing: ${song_list[2]}`)
            break;
        default:
            console.log ("Please enter a valid input. ")
            break;
    }
    let skipping = prompt (`Do you want to skip this song? yes/no `)
    if (skipping === 'yes'.toLowerCase()){
        skip ()
    } else {
        return;
    }
    }

}

function skip(){
    if (max_number === 1) {
        console.log("You have no songs to skip to.")
        return;
    } if (`Now playing: ${song_list[0]}` && song_list.length > 0){
        console.log (`Skipped to ${song_list[1]}`)
        let skip_again = prompt(`Do you want to skip this song too? yes/no `)
        if (skip_again === 'yes'.toLowerCase()){
                console.log (`Skipped to ${song_list[1]}`)
        } else {
            console.log(`Okay, enjoy 'listening' to ${song_list[0]}!`)
        } if (`Now playing: ${song_list[1]}` && song_list.length > 0){
            skip_again= prompt(`Do you want to skip this song too? yes/no `)
            if (skip_again === `yes`.toLowerCase()&& song_list[1]!== undefined){
                console.log (`Skipped to ${song_list[2]}`)
        } else {
            console.log(`Okay, enjoy 'listening' to ${song_list[1]}!`)

        }
    }
}
}