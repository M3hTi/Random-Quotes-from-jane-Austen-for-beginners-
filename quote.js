window.addEventListener('error', (e)=> {
    e.preventDefault()
    console.log(`Custom error handler: Error in ${e.filename} at line ${e.lineno}: ${e.message}`);
    return true
})



const quotes = ['There is no charm equal to tenderness of heart', 'There is nothing like staying at home for real comfort.', 'Life seems but a quick succession of busy nothings.', 'One half of the world cannot understand the pleasures of the other.', 'Nobody minds having what is too good for them.' , 'A single woman with a very narrow income must be a ridiculous, disagreeable old maid - the proper sport of boys and girls; but a single woman of good fortune is always respectable, and may be as sensible and pleasant as anybody else.', 'Nobody, who has not been in the interior of a family, can say what the difficulties of any individual of that family may be.', 'It is happy for you that you possess the talent of flattering with delicacy. May I ask whether these pleasing attentions proceed from the impulse of the moment, or are they the result of previous study?', 'No man is offended by another man\'s admiration of the woman he loves; it is the woman only who can make it a torment.', 'Those who do not complain are never pitied', 'Seldom, very seldom, does complete truth belong to any human disclosure; seldom can it happen that something is not a little disguised, or a little mistaken.', 'If things are going untowardly one month, they are sure to mend the next.', 'Let other pens dwell on guilt and misery.', 'My idea of good company is the company of clever, well-informed people who have a great deal of conversation; that is what I call good company.', 'The more I know of the world, the more I am convinced that I shall never see a man whom I can really love.', 'To sit in the shade on a fine day and look upon verdure is the most perfect refreshment.', 'Vanity working on a weak head, produces every sort of mischief.', 'Give a girl an education and introduce her properly into the world, and ten to one but she has the means of settling well, without further expense to anybody.', 'Dress is at all times a frivolous distinction, and excessive solicitude about it often destroys its own aim.', 'Single women have a dreadful propensity for being poor. Which is one very strong argument in favor of matrimony.', 'There is something so amiable in the prejudices of a young mind, that one is sorry to see them give way to the reception of more general opinions.', 'For what do we live, but to make sport for our neighbors and laugh at them in our turn?', 'A mind lively and at ease, can do with seeing nothing, and can see nothing that does not answer.','I am afraid that the pleasantness of an employment does not always evince its propriety.', 'Respect for right conduct is felt by every body.']



const btnElement = document.querySelector('#btn')
// console.log(btnElement);



// NOTE: Function to generate a random integer between min and max (inclusive)
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let lastQuoteIndex = -1

const displayQuotes = function () {
    try {
        let randomIndex;
        do {
            randomIndex = randomInt(0, quotes.length - 1);
        } while (randomIndex === lastQuoteIndex && quotes.length > 1);
        if(randomIndex >= quotes.length) throw "didn't found"
        const quoteElement = document.querySelector('#quote')
        quoteElement.innerHTML = quotes[randomIndex]
        lastQuoteIndex = randomIndex  
    } catch (error) {
        console.log(error);
    }
}








btnElement.addEventListener('click', displayQuotes)

















