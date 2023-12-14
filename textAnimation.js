const text = document.querySelector(".first-phrase");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "an Entry Level Web Developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "an Entry Level Software Developer";
    }, 4000);
    setTimeout(() => {
        text.textContent = "a newbie Discord Bot Developer";
    }, 8000);
}

textLoad();

setInterval(textLoad, 12000);