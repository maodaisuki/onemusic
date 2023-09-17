var currentTimeElement = document.getElementById('currentTime');
var durationTimeElement = document.getElementById('durationTime');
var currentTime;
var durationTime;
var jsmediatags = window.jsmediatags;

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

function timeUpdate() {  
    return new Promise((resolve, reject) => {
        var customaudio = new Audio('audio')
        customaudio.src = audio.src;
        customaudio.preload = "auto";
        customaudio.addEventListener("loadedmetadata", function() {
            durationTime = parseInt(customaudio.duration);
            durationTime = transTime(durationTime)
            currentTime = transTime(audio.currentTime);
            var w = (audio.currentTime / customaudio.duration * 100).toFixed(2) + "%"; 
            document.getElementsByClassName('track-line')[0].style.setProperty('width', w, 'important');
            currentTimeElement.innerHTML = String(currentTime);
            durationTimeElement.innerHTML = String(durationTime);
        })
    })
}

// 处理歌曲信息
// 处理跨域
function updateInfo() {
    jsmediatags.read(audio.src, {
        onSuccess: function (tag) {
            var tags = tag.tags;
            console.log(tags.artist + " - " + tags.title + ", " + tags.album);

        },
        onError: function (error) {
            // do something.
            console.log(error);
        }
    });
}
