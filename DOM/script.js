const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const aboveTxt = document.createElement("p");
aboveTxt.textContent = "Hey, I'm red!";
aboveTxt.style.color = "red";

container.appendChild(aboveTxt);

const aboveH = document.createElement("h3");
aboveH.textContent = "I'm a blue H3!";
aboveH.style.color = "blue";

container.appendChild(aboveH);

const secondCon = document.createElement("div");
secondCon.classList.add("second");
secondCon.setAttribute("style", "border: black; background: pink;");

container.appendChild(secondCon);

const innerH = document.createElement("h1");
innerH.textContent = "I'm in a  div";

const innerP = document.createElement("p");
innerP.textContent = "Me too!";

secondCon.appendChild(innerH);
secondCon.appendChild(innerP);




// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.