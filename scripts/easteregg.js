var lightning = new Audio("medias/audios/lightning.mp3");
const updtimg = document.getElementById("logofooter");

function herobrine() {
    console.log("New update available.");

    setTimeout(() => console.log("Updating..."), 1000);

    setTimeout(() => console.log("Please wait a few seconds"), 1500);

    setTimeout(() => console.log("Updated :"), 1600);

    setTimeout(() => console.log(
        'Update note :\n"Welcome to 3.0.0.1!!!\nWe maybe have removed Herobrine.'
    ), 2000);

    setTimeout(() => console.log("Or not."), 2500);

    setTimeout(() => lightning.play(), 3500);

    setTimeout(() => {
        updtimg.src = "medias/images/herobrine.webp";
        updtimg.style.height = "2em";
        updtimg.style.width = "auto";
    }, 5000);
}