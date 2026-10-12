const globe = document.querySelector("#globe");
const button = document.querySelector("#shake");
const message = document.querySelector("#message");

const messages = [
    "\"this is my perfect victory! that's right! i win!\"",
    "\"L, do you know, Gods of death love apples?\"",
    "\"this world is rotten, and those who are making it rot deserve to die.\"",
    "\"someone has to do it, so why not me?\"",
    "\"i'm the one who'll become the god of a new world that everyone desires!\"", 
    "\"i'll take a potato chip... and eat it!\"",
];

button.addEventListener("click", () => {
    globe.classList.add("shaking");
    setTimeout(() => globe.classList.remove("shaking"), 600);

    const pick = Math.floor(Math.random() * messages.length);
    message.textContent = messages[pick];
});
