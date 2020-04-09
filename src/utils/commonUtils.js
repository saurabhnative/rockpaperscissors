/**
 * Get random number between min and max
 * @param {*} min 
 * @param {*} max 
 */
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random()%max * (max - min + 1) + min);
}

/**
 * Function to generate random choice from computer's side
 * @param {*} type 
 */
export const getHouseChoice = (type) => {
    if(type === 'basic') {
        const randomNumber = randomIntFromInterval(1,3);
        const choices = ['paper', 'scissor', 'rock'];
        return choices[randomNumber-1];
    } else if(type === 'advanced') {
        const randomNumber = randomIntFromInterval(1,5);
        const choices = ['paper', 'scissor', 'rock', 'lizard', 'spock'];
        return choices[randomNumber-1];
    }
}

/**
 * Function to get result of the game by comparing user's and computer's choice
 * @param {*} userChoice 
 * @param {*} houseChoice 
 * @param {*} gameType 
 */
export const getGameResult = (userChoice, houseChoice) => {
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
    //source: https://stackoverflow.com/questions/22623331/rock-paper-scissors-lizard-spock-in-javascript
    //Set up the choices with what they can beat
    const choices = {
                        rock : {name: "Rock", defeats: ["scissor","lizard"]},
                        paper: {name: "Paper", defeats: ["rock", "spock"]},
                        scissor: {name: "Scissor", defeats: ["paper", "lizard"]},
                        lizard: {name: "Lizard", defeats:["paper","spock"]},
                        spock: {name: "Spock", defeats:["scissor","rock"]}
                    };
    const processMove = function (userChoice, houseChoice) {
        if (userChoice === houseChoice) {
            return gameResultChoices[0];
        } else if (choices[userChoice].defeats.indexOf(houseChoice) > -1) {
            const result = gameResultChoices[2]; 
            const rule = getGameResultRuleText(userChoice, houseChoice);
            result.rule = rule;
            return result;
        } else {
            const result = gameResultChoices[1]; 
            const rule = getGameResultRuleText(houseChoice, userChoice);
            result.rule = rule;
            return result;
        }
    };
    return processMove(userChoice, houseChoice);
}

/**
 * Update game score based on game result
 * @param {*} userScore 
 * @param {*} gameResult 
 */
export const calculateGameScore = (userScore, gameResult) => {
    switch(gameResult.value) {
        case 'win':
            return userScore + 1;
            
        case 'lose':
            if(userScore > 0) {
                return userScore;
            } else {
                return userScore;
            }
            
        case 'tie':
            return userScore;
            
        default:
            return userScore;    
    }
}

/**
 * Display result of the game choices
 * @param {*} victorChoice 
 * @param {*} loserChoice 
 */
const getGameResultRuleText = (victorChoice, loserChoice) => {  
    const rules = {
        rock: {
            lizard: 'Rock crushes lizard',
            scissor: 'Rock crushes scissors'
        },
        paper: {
            spock: 'Paper disproves Spock',
            rock: 'Paper covers rock'
        },
        scissor: {
            lizard: 'Scissors beheads lizard',
            paper: 'Scissors cuts paper',
        },
        lizard: {
            spock: 'Lizard poisons Spock',
            paper: 'Lizard eats paper'
        },
        spock: {
            scissor: 'Spock distroys scissors',
            rock: 'Spock vaporizes rock'
        }
    }
    return rules[victorChoice][loserChoice];
}