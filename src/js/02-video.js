    import Player from "@vimeo/player";
    import throttle from "lodash.throttle";

        const iframe = document.querySelector('iframe');
        const player = new Vimeo.Player(iframe);

        player.on('play', function() {
            console.log('played the video!');
        });

        player.getVideoTitle().then(function(title) {
            console.log('title:', title);
        });

    const currentTime = function (data) {
        localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds));
        let time = Number(localStorage.getItem("videoplayer-current-time"));
        console.log(time);
    }

    player.on("timeupdate", throttle(currentTime, 1000));

    player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function(seconds) {
        
    }).catch(function(error) {
        switch (error.name) {
    case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;

            default:
                // some other error occurred
                break;
        }
    });

