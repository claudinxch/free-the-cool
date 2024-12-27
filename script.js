const mainPage = document.querySelector('.main')
const noButton = document.querySelector('#no')
const yesButton = document.querySelector('#yes')

const getRandomNumber = (position) => {
  const random = Math.floor(Math.random() * 200)
  return position !== 'top' ? Math.random() < 0.5 ? -random : random : random
}

const moveButton = () => {
    const currentTop = parseInt(window.getComputedStyle(noButton).top, 10) || 0
    const currentLeft = parseInt(window.getComputedStyle(noButton).left, 10) || 0

    let newTop, newLeft;

    do {
      newTop = getRandomNumber('top')
      newLeft = getRandomNumber('left')
    } while (
      Math.abs(newTop - currentTop) < 50 && 
      Math.abs(newLeft - currentLeft) < 50
    )

    noButton.style.top = `${newTop}px`
    noButton.style.left = `${newLeft}px`
}

const preloadImage = (src) => {
    const img = new Image()
    img.src = src
}

const imageSrc = 'image.png';
preloadImage(imageSrc);

yesButton.addEventListener('click', () => {
    content = `<div class="main">
        <h1>Sempre soube que você adoraria liberar!</h1>
        <img src="${imageSrc}" alt="Celebration Image" />
    </div>`
    mainPage.innerHTML = content
})


noButton.addEventListener('mouseover', moveButton)