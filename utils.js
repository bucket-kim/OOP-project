class Beat {
  constructor(audioSrc) {
    this.audio = new Audio(audioSrc);
  }

  play = () => {
    this.audio.currentTime = 0;
    this.audio.play();
  };
}

class Button {
  constructor(color, keyCode) {
    this.color = color;
    this.keyCode = keyCode;
    this.element = document.getElementById(keyCode);
    this.setbuttonColorInHTML();
    this.setTransitionEnd();
  }

  setTransitionEnd = () => {
    this.element.addEventListener("transitionend", this.deselect);
  };

  setbuttonColorInHTML = () => {
    this.element.style.borderColor = this.color;
  };

  select = () => {
    this.element.style.background = this.color;
    this.element.style.boxShadow = "0px 0px 17px 0px";
  };

  deselect = () => {
    this.element.style.background = "rgb(70, 70, 78)";
    this.element.style.boxShadow = "none";
  };
}
