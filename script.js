let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadeddata = function(){
   progress.max = song.duration;
   progress.value = song.currentTime;

}

function playPause() {
    if (song.paused) {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    } else {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
}

song.onloadeddata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
};

setInterval(() => {
    progress.value = song.currentTime;
}, 500);

progress.oninput = function() {
    song.currentTime = progress.value;
};

