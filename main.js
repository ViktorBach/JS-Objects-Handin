//1 - What to wear
const clothesHelper = (temperature) => {
    if (temperature <= 0) {
        console.log("it is " + temperature + " degrees, wear winter clothes")
    }else if (temperature <= 10) {
        console.log("it is " + temperature + " degrees, wear a thick jacket and long pants")
    }else if (temperature <= 15) {
        console.log("it is " + temperature + " degrees, wear a jacket and long pants")
    }else if (temperature <= 20) {
        console.log("it is " + temperature + " degrees, wear a sweater and long pants")
    }else if (temperature <= 25) {
        console.log("it is " + temperature + " degrees, wear a t-shirt and shorts")
    }else {
        console.log("it is " + temperature + " degrees, consider going to the beach B)")
    }
}
clothesHelper(21)


//2 - Dice game
const diceRoller = (numberOfDiceRolls) => {
    let allSixes = true

    for (let i = 0; i < numberOfDiceRolls; i++) {
        const rollResult = ~~(Math.random() * 6) + 1
        if (rollResult === 6 && !allSixes) {
            console.log("You just hit 6!")
        } else if (rollResult !== 6) {
            allSixes = false
        }
    } if (allSixes) {
        console.log("Jackpot 🎉")
    }
}
diceRoller(7)


//3 - Sentiment analyzer
const sentimentAnalyzer = (sentence) => {
    const positiveWords = ["happy", "awesome", "super", "glad", "good", "great", "excited"]
    const negativeWords = ["sad", "terrible", "bad", "angry", "hate", "awful", "boring"]
    const words = sentence.toLowerCase().split(/\s+/)
    let score = 0
    const positiveMatches = []
    const negativeMatches = []
    words.forEach((word) => {
        if (positiveWords.includes(word)) {
            score += 1
            positiveMatches.push(word)
        } else if (negativeWords.includes(word)) {
            score -= 1
            negativeMatches.push(word)
        }
    })
    let sentiment
    if (score > 0) {
        sentiment = "positive"
    } else if (score < 0) {
        sentiment = "negative"
    } else {
        sentiment = "neutral"
    }
    return {
        score,
        positiveWords: positiveMatches,
        negativeWords: negativeMatches,
        sentiment
    }
}
const sentimentScoreObject = sentimentAnalyzer("I am super terrible and angry and sad")
console.log(sentimentScoreObject)


//4 - Character frequencies
const characterFrequency = (string) => {
    return string.split('').reduce((total, letter) => {
        total[letter] ? total[letter]++ : total[letter] = 1
        return total
    }, {})
}
const checkCharacterFrequency = characterFrequency("hello world!")
console.log(checkCharacterFrequency)


//5 - Credit card formatter
const creditCardFormatter = (input) => {
    if (typeof input !== 'string' || !/^\d{16}$/.test(input)) {
        console.log('Invalid input. Please provide exactly 16 digits.')
        return
    }
    const formattedCreditCardNumber = input.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 $2 $3 $4')
    console.log("original " + input)
    console.log("formatted " + formattedCreditCardNumber)
}
const inputNumber = "1234123412341234"
creditCardFormatter(inputNumber)