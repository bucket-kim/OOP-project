class Beat {
  constructor(audioSrc) {
    this.audio = new Audio(audioSrc);
    console.log(this.audio);
  }

  play = () => {
    this.audio.currentTime = 0;
    this.audio.play();
  };
}

class Button {
  constructor(color, keyCode) {}
  setbuttonColor = () => {};

  select = () => {};

  deselect = () => {};
}
