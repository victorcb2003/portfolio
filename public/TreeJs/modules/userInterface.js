export function userInterface(Planets,target) {
  const buttons = {
    sun: document.querySelector("#sun"),
    mercury: document.querySelector("#mercury"),
    venus: document.querySelector("#venus"),
    earth: document.querySelector("#earth"),
    moon: document.querySelector("#moon"),
    mars: document.querySelector("#mars"),
    jupiter: document.querySelector("#jupiter"),
    saturn: document.querySelector("#saturn"),
    neptune: document.querySelector("#neptune"),
    uranus: document.querySelector("#uranus"),
  };

  for (const planet in buttons) {
    buttons[planet].addEventListener("click", () => {
      target.previous = target.current
      target.current = Planets[planet]
    });
  }
}
