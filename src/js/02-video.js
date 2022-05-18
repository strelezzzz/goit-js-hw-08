import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
// You can listen for events in the player by attaching a callback using .on():
player.on('timeupdate', throttle(setTimeToLocalStorage, 1000) );
  
function setTimeToLocalStorage (data) {
    console.log(data.seconds);
    localStorage.setItem(STORAGE_KEY, data.seconds);
}
// data is an object containing properties specific to that event
// {
//   duration: 61.857;
//   percent: 0.049;
//   seconds: 3.034;
// }
// setCurrentTime(seconds: number): Promise<number, (RangeError|Error)>
player
  .setCurrentTime(localStorage.getItem(STORAGE_KEY))
  .then(function (seconds) {
    console.log(seconds);
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
