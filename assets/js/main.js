var backStatus = false;
var audio = document.getElementById('player');
init();

function init() {
    audio.volume = 0.1;
    audio.load();
}

function showMoreInfo() {
    document.getElementsByClassName('board')[0].style.setProperty('display', 'block', 'important');
    document.getElementsByClassName('main-item')[0].style.setProperty('display', 'none', 'important');
    document.getElementsByClassName('music-list-page-container')[0].style.setProperty('display', 'none', 'important');
    document.getElementsByClassName('music-list-btn')[0].getElementsByTagName("i")[0].setAttribute('class', 'fa-solid fa-arrow-left fa-lg');
    backStatus = true;
}

// 音乐列表按钮  & 返回按钮
function bar() {
    if(backStatus) {
        backStatus = false;
        document.getElementsByClassName('board')[0].style.setProperty('display', 'none', 'important');
        document.getElementsByClassName('main-item')[0].style.setProperty('display', 'block', 'important');
        document.getElementsByClassName('music-list-page-container')[0].style.setProperty('display', 'none', 'important');
        document.getElementsByClassName('music-list-btn')[0].getElementsByTagName("i")[0].setAttribute('class', 'fa-solid fa-bars fa-lg');
        document.getElementsByClassName('main-item')[0].setAttribute('class',  'main-item animate__animated animate__zoomIn animate__faster');
    }
    else {
        // show music list.
        document.getElementsByClassName('music-list-page-container')[0].style.setProperty('display', 'grid', 'important');
        document.getElementsByClassName('main-item')[0].style.setProperty('display', 'none', 'important');
        document.getElementsByClassName('music-list-btn')[0].getElementsByTagName("i")[0].setAttribute('class', 'fa-solid fa-arrow-left fa-lg');
        backStatus = true;
    }
}

function showLyrics() {
    // console.log("Lyrics");
}

function playMusic() {
    var items = document.getElementsByClassName('play-btn')
    // console.log(items)
    if(audio.paused) {
        audio.play();
        items[0].getElementsByTagName("i")[0].setAttribute('class','fa-solid fa-pause');
        items[1].getElementsByTagName("i")[0].setAttribute('class','fa-solid fa-pause');
    }
    else {
        audio.pause();
        items[0].getElementsByTagName("i")[0].setAttribute('class', 'fas fa-play');
        items[1].getElementsByTagName("i")[0].setAttribute('class', 'fas fa-play');
    }
}

function music(title, artists, url) {
    this.title = "";
    this.artists = "";
    this.url = "";
}

function controlVolume(id) {
    
}
