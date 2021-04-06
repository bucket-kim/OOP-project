let beats = {
  "65": {
    beat: new Beat("./assets/SynthKeys.wav"),
    button: new Button("#00fffe", 65),
  },
  "83": {
    beat: new Beat("./assets/SynthBass.wav"),
    button: new Button("#00fffe", 83),
  },
  "68": {
    beat: new Beat("./assets/MoustacheBrass.wav"),
    button: new Button("#00fffe", 68),
  },
  "70": {
    beat: new Beat("./assets/Drums2.wav"),
    button: new Button("#ff00ff", 70),
  },
  "71": {
    beat: new Beat("./assets/loopPee.wav"),
    button: new Button("#ff00ff", 71),
  },
  "72": {
    beat: new Beat("./assets/loopradio.wav"),
    button: new Button("#ff00ff", 72),
  },
  "74": {
    beat: new Beat("./assets/yay.mp3"),
    button: new Button("#ffffff", 74),
  },
  "75": {
    beat: new Beat("./assets/duck.mp3"),
    button: new Button("#ffffff", 75),
  },
  "76": {
    beat: new Beat("./assets/runningman.mp3"),
    button: new Button("#ffffff", 76),
  },
};

triggerBeat = (e) => {
  key = e.keyCode;
  if (key in beats) {
    let keyPress = beats[key];
    keyPress.beat.play();
    keyPress.button.select();
  }
};

document.addEventListener("keydown", triggerBeat);
