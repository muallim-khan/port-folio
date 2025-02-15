
// Animated "Hello World" Text
const helloWorldText = "Full Stack Developer";
const helloWorldElement = document.getElementById("hello-world");
let index = 0;
let isDeleting = false;

function animateText2() {
const currentText = helloWorldElement.innerText;
if (!isDeleting) {
// Add a letter
helloWorldElement.innerText = helloWorldText.slice(0, index + 1);
index++;
if (index === helloWorldText.length) {
isDeleting = true;
setTimeout(animateText2, 1000); // Pause before deleting
} else {
setTimeout(animateText2, 100); // Speed of typing
}
} else {
// Delete a letter
helloWorldElement.innerText = helloWorldText.slice(0, index - 1);
index--;
if (index === 0) {
isDeleting = false;
}
setTimeout(animateText2, 50); // Speed of deleting
}
}

animateText2();



// muallim
const text = "Mualleem";
const container = document.querySelector(".text-container");

text.split("").forEach((char, index) => {
    let span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    span.classList.add("letter");
    container.appendChild(span);
});

function animateText() {
    const letters = document.querySelectorAll(".letter");
    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.style.opacity = 1;
            letter.style.transform = "translateY(0)";
        }, index * 100);
    });

    setTimeout(() => {
        letters.forEach((letter, index) => {
            setTimeout(() => {
                letter.style.opacity = 0;
                letter.style.transform = "translateY(20px)";
            }, index * 100);
        });
    }, letters.length * 100 + 1000);
}

setInterval(animateText, 4000);
animateText();





  // Animated Button
  const button = document.getElementById("animated-button");
  const buttonContainer = document.querySelector(".button-container");
  
  function moveButton() {
  const containerWidth = buttonContainer.offsetWidth;
  const containerHeight = buttonContainer.offsetHeight;
  const buttonWidth = button.offsetWidth;
  const buttonHeight = button.offsetHeight;
  
  const randomX = Math.floor(Math.random() * (containerWidth - buttonWidth));
  const randomY = Math.floor(Math.random() * (containerHeight - buttonHeight));
  
  button.style.left = `${randomX}px`;
  button.style.top = `${randomY}px`;
  }
  
  setInterval(moveButton, 1000); // Move button every second
  
  button.addEventListener("mouseenter", () => {
  moveButton(); // Move button on hover
  });

//   cube rotate
  // script.js
  const cube = document.querySelector('.cube');
  
  // Pause rotation on hover
  cube.addEventListener('mouseover', () => {
  cube.style.animationPlayState = 'paused';
  });
  
  // Continue rotation on mouse out
  cube.addEventListener('mouseout', () => {
  cube.style.animationPlayState = 'running';
  });
  
  // Continue rotation on double click
  cube.addEventListener('dblclick', () => {
  cube.style.animationPlayState = 'running';
  });