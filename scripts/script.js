var input;
var windowObjectReference;
var number = 0;
var minecraftBackgroundMusic = new Audio("medias/audios/music1.mp3");
var minecraftBackgroundMusic2 = new Audio("medias/audios/music2.mp3");
var minecraftBackgroundMusic3 = new Audio("medias/audios/music3.mp3");
var minecraftBackgroundMusic4 = new Audio("medias/audios/music4.mp3");
var minecraftBackgroundMusic5 = new Audio("medias/audios/music5.mp3");
var minecraftBackgroundMusic6 = new Audio("medias/audios/music6.mp3");
var i = Math.floor(Math.random() * 6);
minecraftBackgroundMusic.volume = 0.25;
minecraftBackgroundMusic2.volume = 0.25;
minecraftBackgroundMusic3.volume = 0.25;
minecraftBackgroundMusic4.volume = 0.25;
minecraftBackgroundMusic5.volume = 0.25;
minecraftBackgroundMusic6.volume = 0.25;
var version = "26.2";
var form = 0;

play();

if (window.innerWidth < 920) {
    window.location.href="phone.html";
}

function change(input){
    form=input;
}

function launch() {
    if (form==0) {
        openPopup("launch/index.html?offline/"+version+".html");
        writeLog("offline",version);
    }

    else {
        openPopup("launch/offline/modpack");
    }
    return false;
}

function versionfunc(addversion) {
	version = addversion;
	console.log(version);
    const vimg = document.getElementById("vimg");

    if (version === "0.4.1" || version === "Indev") {
        vimg.style.backgroundImage = 'url("medias/images/minecraft-launcher.svg")';
    } else {
        vimg.style.backgroundImage = 'url("medias/images/versions/' + version + '.webp")';
    }
}

function updt() {
	window.location.href="help/index.html#el_version";
}

function openPopup(url) {
	windowObjectReference = window.open(url,"WindowName","popup",);
}

function play() {
	if (i === 0) {
		minecraftBackgroundMusic.play();
		repeatMusic(92000);
		i++;
	}
	else if (i === 1) {
		minecraftBackgroundMusic2.play();
		repeatMusic(208000);
		i++;
	}
	else if (i === 2) {
		minecraftBackgroundMusic3.play();
		repeatMusic(310000);
		i = 0;
	}
	else if (i === 3) {
		minecraftBackgroundMusic4.play();
		repeatMusic(216000);
		i = 0;
	}
	else if (i === 4) {
		minecraftBackgroundMusic5.play();
		repeatMusic(68000);
		i = 0;
	}
	else if (i === 5) {
		minecraftBackgroundMusic6.play();
		repeatMusic(208000);
		i = 0;
	}
}

function repeatMusic(timeAudio) {
	setTimeout("console.log('Replaying music.');play();",timeAudio);
}