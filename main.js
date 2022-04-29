let quote = document.querySelector('.quote');
let author = document.querySelector('.author-area .author-name')
let newButton = document.querySelector('.buttons button')
let speech = document.querySelector('.speech')
let copy = document.querySelector('.copy')
let twitter = document.querySelector('.twitter')

function randomQuotes () {
    newButton.classList.add('loading')
    newButton.innerText = 'Loading...'
    fetch("https://api.quotable.io/random").then(response => response.json()).then( data => {
        quote.innerText = data.content;
        author.innerText = data.author;
        newButton.classList.remove('loading')
        newButton.innerText = 'New Quote'
    })
}

newButton.addEventListener('click', randomQuotes)

randomQuotes()

speech.addEventListener('click', e => {
    e.preventDefault()
    let authorence = new SpeechSynthesisUtterance(`${quote.innerText} by ${author.innerText}`)
    speechSynthesis.speak(authorence)
})
copy.addEventListener('click', e => {
    navigator.clipboard.writeText(quote.innerText)
})
twitter.addEventListener('click', e => {
    let twitterURL = `https://twitter.com/intent/tweet?url=${quote.innerText}`;
    window.open(twitterURL, '_blank')
})




