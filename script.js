const textArea = document.getElementById("textArea")
const sentence = document.getElementById("sentence")
const buttonElements = document.getElementsByTagName('button')

const answerBtn = document.getElementById("answer-stop")
const nextCardBtn = document.getElementById("next-card")
const loader = document.getElementById("loader")
const cardContainer = document.getElementById("card-container")
const playBtn = document.getElementById("play-pause")

const audioElement = document.getElementById('audio')

let card
let index = 0

function showLoadingSpinner() {
    loader.hidden = false
    cardContainer.hidden = true
}

function removeLoadingSpinner() {
    loader.hidden = true
    cardContainer.hidden = false
}

function showAnswer() {

    showLoadingSpinner()
    answerBtn.innerHTML = 'Stop'
    sentence.textContent = card.sentenceEng
    textArea.textContent = card.eng
    let word = card.eng.replace(/\s/g, '')
    audioElement.src = 'audio1/' + word + '.mp3'
    playBtn.hidden = false
    removeLoadingSpinner()
}

function toggleButton() {

    // playBtn.disabled = !playBtn.disabled
    // answerBtn.disabled = !answerBtn.disabled

    console.log(answerBtn.disabled)

}

function playTrack() {
    audioElement.play()
    toggleButton()
}

function checkIndex() {
    if (index === localCards.length) {
        index = 0
    }
}

function generateWord() {
    playBtn.disabled = false
    answerBtn.disabled = false
    answerBtn.innerHTML = 'Answer'
        // console.log(answerBtn.disabled)
        // toggleButton()
    audioElement.pause()
    showLoadingSpinner()
    playBtn.hidden = true
    card = localCards[index]
        // card = localCards[Math.floor(Math.random() * localCards.length)]
    textArea.textContent = card.rus
    sentence.textContent = card.sentenceRus
    if (card.sentenceRus.length > 120) {
        sentence.classList.add("long-text")
    } else {
        sentence.classList.remove("long-text")
    }
    removeLoadingSpinner()
    index++
    checkIndex()
}

generateWord()

answerBtn.addEventListener("click", showAnswer)
nextCardBtn.addEventListener("click", generateWord)
playBtn.addEventListener("click", playTrack)
audioElement.addEventListener('ended', toggleButton)