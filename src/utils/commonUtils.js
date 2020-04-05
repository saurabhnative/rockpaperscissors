function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
/**
 * Function to generate random choice from computer's side
 * @param {*} type 
 */
export const getHouseChoice = (type) => {
    const randomNumber = randomIntFromInterval(1,3);
    if(type === 'basic') {
        const choices = ['paper', 'scissor', 'rock'];
        return choices[randomNumber-1];
    } 
}

/**
 * Function to get result of the game by comparing user's and computer's choice
 * @param {*} userChoice 
 * @param {*} houseChoice 
 * @param {*} gameType 
 */
export const getGameResult = (userChoice, houseChoice, gameType) => {
    const gameResultChoices = [
        {
            'text': 'YOU TIED',
            'value': 'tie'
        },
        {
            'text': 'YOU LOSE',
            'value': 'lose'
        },
        {
            'text': 'YOU WIN',
            'value': 'win'
        }
    ]
    if(gameType === 'basic') {
        const moves = {
            'rock': 0, 
            'paper': 1,
            'scissor': 2
        };
        const userMove = moves[userChoice];
        const houseMove = moves[houseChoice];
        
        const processMove = function (a, b) {
            // source: https://stackoverflow.com/questions/11377117/rock-paper-scissors-determine-win-loss-tie-using-math
            if (a === b) {
                return gameResultChoices[0];
            } else if ((a - b) % 3 === 1) {
                return gameResultChoices[2];   
            } else {
                return gameResultChoices[1];
            }
        };
        return processMove(userMove, houseMove);
    }
}

export const calculateGameScore = (userScore, gameResult) => {
    switch(gameResult.value) {
        case 'win':
            return userScore + 1;
            
        case 'lose':
            if(userScore > 0) {
                return userScore - 1;
            } else {
                return userScore;
            }
            
        case 'tie':
            return userScore;
            
        default:
            return userScore;    
    }
}