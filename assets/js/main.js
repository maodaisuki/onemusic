var backStatus = false;
var audio = document.getElementById('player');
var nowplay = 0;
var currentTimeElement = document.getElementById('currentTime');
var durationTimeElement = document.getElementById('durationTime');
var currentTime;
var durationTime;
var data;
// if(audio.currentTime == 0) {
//     document.getElementsByClassName('buffer')[0].style.setProperty('width', "4%", 'important');
// }
// else {
//     // console.log(audio.buffered.end(audio.buffered.length - 1))
//     console.log(parseFloat(audio.buffered.end(audio.buffered.length - 1)));
//     var w = (parseFloat((audio.buffered.end(audio.buffered.length - 1)) - parseFloat(currentTime))) / (parseFloat(durationTime) - parseFloat(currentTime)).toFixed(2) + "%"; 
//     console.log(w)
//     document.getElementsByClassName('buffer')[0].style.setProperty('width', w, 'important');
// }
init();

async function init() {
    const res = await fetch('/config.json', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    data = await res.json();
    audio.volume = 0.2;
    updateInfo(nowplay);
    console.log("init over");
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
    if (backStatus) {
        backStatus = false;
        document.getElementsByClassName('board')[0].style.setProperty('display', 'none', 'important');
        document.getElementsByClassName('main-item')[0].style.setProperty('display', 'block', 'important');
        document.getElementsByClassName('music-list-page-container')[0].style.setProperty('display', 'none', 'important');
        document.getElementsByClassName('music-list-btn')[0].getElementsByTagName("i")[0].setAttribute('class', 'fa-solid fa-bars fa-lg');
        document.getElementsByClassName('main-item')[0].setAttribute('class', 'main-item animate__animated animate__zoomIn animate__faster');
    }
    else {
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
    if (audio.paused) {
        audio.play();
        items[0].getElementsByTagName("i")[0].setAttribute('class', 'fa-solid fa-pause');
        items[1].getElementsByTagName("i")[0].setAttribute('class', 'fa-solid fa-pause');
    }
    else {
        audio.pause();
        items[0].getElementsByTagName("i")[0].setAttribute('class', 'fas fa-play');
        items[1].getElementsByTagName("i")[0].setAttribute('class', 'fas fa-play');
    }
}

function controlVolume(id) {

}

// 处理歌曲信息
// 处理跨域
function updateInfo(index) {
    // abort bug.
    if(index >= data.musiclist.length) {
        index = 0;
    }
    else if (index < 0) {
        index = data.musiclist.length - 1;
    }
    else {
        // 正常范围。
    }
    audio.src = data.musiclist[index].url;
    audio.load();
    // console.log("audio.src = " + audio.src);
    document.getElementsByClassName('song-title')[0].innerHTML = String(data.musiclist[index].song);
    document.getElementsByClassName('artist-title')[0].innerHTML = String(data.musiclist[index].artist);
    nowplay = index;
}

function transTime(value) {
    // TODO 修复 hour
    var value = parseInt(value);
    var m = parseInt(value / 60);
    var s = String(value % 60);
    if(m == 0) {
        m = '00';
    }
    else if(m < 10) {
        m = '0' + m;
    }
    if(s.length == 1) {
        s = '0' + s;
    }
    return m + ":" + s;
}

// 切歌
// 歌单切歌
function musicListPlay(id) {
    if(audio.paused) {
        // do something.
    }
    else {
        playMusic();
    }
    var nextplay = String(id.getElementsByClassName('item-num')[0].getElementsByTagName("span")[0].innerHTML);
    // str.substr() deprecated.
    nextplay = nextplay.substr(0, nextplay.length - 1) - 1;
    backStatus = false;
    currentTimeElement.innerHTML = String("loading~");
    durationTimeElement.innerHTML = String("");
    document.getElementsByClassName('track-line')[0].style.setProperty('width', "0%", 'important');
    updateInfo(nextplay);
    playMusic();
    /* 更改时间 start */

    /* 更改时间 end */
    document.getElementsByClassName('board')[0].style.setProperty('display', 'none', 'important');
    document.getElementsByClassName('main-item')[0].style.setProperty('display', 'block', 'important');
    document.getElementsByClassName('music-list-page-container')[0].style.setProperty('display', 'none', 'important');
    document.getElementsByClassName('music-list-btn')[0].getElementsByTagName("i")[0].setAttribute('class', 'fa-solid fa-bars fa-lg');
    document.getElementsByClassName('main-item')[0].setAttribute('class', 'main-item animate__animated animate__zoomIn animate__faster');
    // BUG duration: NAN
}

function musicLeft() {
    var index = nowplay + 1;
    if(audio.paused) {
        //
    }
    else {
        playMusic();
    }
    audio.src = "";
    currentTimeElement.innerHTML = String("loading~");
    durationTimeElement.innerHTML = String("");
    document.getElementsByClassName('track-line')[0].style.setProperty('width', "0%", 'important');
    updateInfo(index);
    playMusic();
}

function musicRight() {
    var index = nowplay + 1;
    if(audio.paused) {
        //
    }
    else {
        playMusic();
    }
    audio.src = "";
    currentTimeElement.innerHTML = String("loading~");
    durationTimeElement.innerHTML = String("");
    document.getElementsByClassName('track-line')[0].style.setProperty('width', "0%", 'important');
    updateInfo(index);
    playMusic();
}


