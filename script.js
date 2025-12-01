const randomInt = (max) => {
  return Math.floor(Math.random() * max);
};

window.onload = function() {
  const gamcolorQuips = [
    "Looks like gamcolor.com is getting ready for a second act.",
    "Gamcolor.com: ready to trade theatrical gels for retail sales.",
    "A domain with a history of lighting up the stage, now for a new business.",
    "From the backstage of Broadway to the front page of our store.",
    "We're keeping the legacy of color, just changing the hue.",
    "Giving gamcolor.com a new spotlight on its career."
  ];

  const centerTextBottomElement = document.getElementById("centerTextBottom");
  const randomChoice = randomInt(gamcolorQuips.length);

  // console.log("Selected Quip:", gamcolorQuips[randomChoice]);

  if (centerTextBottomElement) {
    centerTextBottomElement.innerHTML = gamcolorQuips[randomChoice];
  }
};
