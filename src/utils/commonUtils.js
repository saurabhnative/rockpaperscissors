function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export const getHouseChoice = (type) => {
    const randomNumber = randomIntFromInterval(1,3);
    if(type === 'basic') {
        const choices = ['paper', 'scissor', 'rock'];
        return choices[randomNumber-1];
    } 
}

export const getGameResult = (userChoice, getHouseChoice) => {

}