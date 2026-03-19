const randomNumber = Math.floor(Math.random() * 10) + 1;

let guess;

while (guess !== randomNumber) {
    guess = Number(prompt("Guess a number between 1 and 10:"));

    if(isNaN(guess)){
        alert("Please enter a valid number");
        continue;
    }

    if(guess === randomNumber){
        alert("you guessed correct");
    }
    else if(guess < randomNumber){
        alert("too low try again");
    }
    else{
        alert("too high try again");
    }

}  