//number guessing game
const minnum=50;
const maxnum=100;
const answer=Math.floor(Math.random()*(maxnum-minnum)+1)+minnum;

let attempts=0;
let guess;
let running =true;
while(running)
{
    guess=window.prompt(`enter the number between ${minnum}-${maxnum}`);
    guess=Number(guess);
    if(isNaN(guess))
    {
        window.alert("enter a valid number");
        
    }
    else if(guess<minnum || guess>maxnum)
    {
        window.alert("enter a valid number");
    }
    else{
        attempts++;
        if(guess<answer)
        {
            window.alert("you guess is too low");
        }
        else if(guess>answer)
        {
            window.alert("your guess is too high");
        }
        else
        {
            window.alert(`you guess is correct ${guess} and you took${attempts}`);
            running =false;
        }
    }
    
}
