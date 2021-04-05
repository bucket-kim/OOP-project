let beats = {
  "65": {
    beat: new Beat("./assets/bassdrum.mp3"),
  },
  "83": {
    beat: new Beat("./assets/hihat.mp3"),
  },
  "68": {
    beat: new Beat("./assets/snaredrum.mp3"),
  },
  "70": {
    beat: new Beat("./assets/mediumtom.mp3"),
  },
  "71": {
    beat: new Beat("./assets/tomdrum.mp3"),
  },
  "72": {
    beat: new Beat("./assets/kids.mp3"),
  },
  "74": {
    beat: new Beat("./assets/yay.mp3"),
  },
  "75": {
    beat: new Beat("./assets/duck.mp3"),
  },
  "76": {
    beat: new Beat("./assets/runningman.mp3"),
  },
};

triggerBeat = (e) => {
  console.log(e);
};

document.addEventListener("keydown", triggerBeat);
