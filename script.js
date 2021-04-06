let beats = {
  "65": {
    beat: new Beat("./assets/SynthKeys.wav"),
  },
  "83": {
    beat: new Beat("./assets/SynthBass.wav"),
  },
  "68": {
    beat: new Beat("./assets/MoustacheBrass.wav"),
  },
  "70": {
    beat: new Beat("./assets/Drums2.wav"),
  },
  "71": {
    beat: new Beat("./assets/loopPee.wav"),
  },
  "72": {
    beat: new Beat("./assets/loopradio.wav"),
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
  key = e.keyCode;
  if (key in beats) {
    let keyPress = beats[key];
    keyPress.beat.play();
  }
};

document.addEventListener("keydown", triggerBeat);
