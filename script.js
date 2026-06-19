// =======================
// SAKURA PETALS
// =======================

const petalsLayer =
document.getElementById("petalsLayer");

for(let i=0;i<60;i++){

    const petal =
    document.createElement("div");

    petal.classList.add("petal");

    petal.style.left =
    Math.random()*100 + "%";

    petal.style.animationDuration =
    (10 + Math.random()*10) + "s";

    petal.style.animationDelay =
    Math.random()*8 + "s";

    petal.style.opacity =
    .3 + Math.random()*0.7;

    petalsLayer.appendChild(petal);
}

// =======================
// FLOATING HEARTS
// =======================

const heartsLayer =
document.getElementById("heartsLayer");

for(let i=0;i<15;i++){

    const heart =
    document.createElement("div");

    heart.classList.add("floating-heart");

    heart.innerHTML = "❤️";

    heart.style.left =
    Math.random()*100 + "%";

    heart.style.animationDuration =
    (8 + Math.random()*8) + "s";

    heart.style.animationDelay =
    Math.random()*10 + "s";

    heartsLayer.appendChild(heart);
}

// =======================
// SCREENS
// =======================

const genderScreen =
document.getElementById("genderScreen");

const brotherScreen =
document.getElementById("brotherScreen");

const proposalScreen =
document.getElementById("proposalScreen");

brotherScreen.style.display="none";
proposalScreen.style.display="none";

// =======================
// LETTERS
// =======================

const femaleLetter = `

Dear LOVE,

There are people we meet and quietly forget.

Then there are people who somehow make
ordinary days feel special.

You became one of those people.

Every conversation,
every smile,
every little memory
became something I cherish.

I don't have perfect words.

I only know that life feels brighter
when you're around.

And if fate is kind,

I'd love to create
many more memories with you.

❤️

`;

const pressureMessages = [

"Are you sure? 🥺",

"Maybe read the letter again ❤️",

"The Yes button looks nice 🌸",

"Some moments are special ✨",

"Think about it once more 💖",

"Your heart already knows ❤️",

"Just imagine the memories 🌹"

];

// =======================
// GENDER CHOICE
// =======================

function chooseMale(){

genderScreen.style.display="none";

brotherScreen.style.display="block";

window.scrollTo(0,0);

}

function chooseFemale(){

genderScreen.style.display="none";

proposalScreen.style.display="block";

window.scrollTo(0,0);

typeLetter();

startPressureMessages();

}

// =======================
// BRO MODE
// =======================

function broAnswer(){

document
.getElementById("broResponse")
.classList.remove("hidden");

launchConfetti();

}

// =======================
// TYPE LETTER
// =======================

function typeLetter(){

const target =
document.getElementById("typedLetter");

target.innerHTML = "";

let i = 0;

const typing =
setInterval(()=>{

if(i < femaleLetter.length){

if(femaleLetter[i] === "\n"){

target.innerHTML += "<br>";

}else{

target.innerHTML +=
femaleLetter[i];

}

i++;

}else{

clearInterval(typing);

}

},35);

}

// =======================
// PRESSURE TEXT
// =======================

let pressureTimer;

function startPressureMessages(){

let index = 0;

pressureTimer =
setInterval(()=>{

document
.getElementById("pressureMsg")
.innerText =
pressureMessages[index];

index++;

if(index >= pressureMessages.length){

index = 0;

}

},3000);

}

// =======================
// BUTTONS
// =======================

const yesBtn =
document.getElementById("yesBtn");

const noBtn =
document.getElementById("noBtn");

let noCount = 0;

// NO BUTTON ESCAPES

function moveNoButton(){

const x =
Math.random() *
(window.innerWidth - 220);

const y =
Math.random() *
(window.innerHeight - 120);

noBtn.style.left =
x + "px";

noBtn.style.top =
y + "px";

}

noBtn.addEventListener(
"mouseenter",
()=>{

noCount++;

moveNoButton();

yesBtn.style.transform =
`scale(${1 + noCount*0.05})`;

if(noCount > 10){

document
.getElementById("pressureMsg")
.innerText =
"That button really doesn't want to be clicked 😭";

}

}
);

// If user actually clicks No

noBtn.addEventListener(
"click",
()=>{

clearInterval(pressureTimer);

document
.getElementById("noResponse")
.style.display =
"block";

}
);

// YES BUTTON

yesBtn.addEventListener(
"click",
()=>{

clearInterval(pressureTimer);

document
.getElementById("yesResponse")
.style.display =
"block";

launchConfetti();

window.scrollTo({

top:
document.body.scrollHeight,

behavior:"smooth"

});

}
);

// =======================
// CONFETTI
// =======================

function launchConfetti(){

for(let i=0;i<120;i++){

const confetti =
document.createElement("div");

confetti.style.position =
"fixed";

confetti.style.width =
"8px";

confetti.style.height =
"8px";

confetti.style.borderRadius =
"50%";

const colors = [

"#ff5c8d",
"#ffd166",
"#06d6a0",
"#118ab2",
"#ef476f",
"#f78fb3"

];

confetti.style.background =
colors[
Math.floor(
Math.random()*colors.length
)
];

confetti.style.left =
Math.random()*100 + "vw";

confetti.style.top =
"-20px";

confetti.style.zIndex =
9999;

document.body.appendChild(
confetti
);

const fall =
10 + Math.random()*5;

confetti.animate(

[
{
transform:
`translateY(0px)
rotate(0deg)`
},

{
transform:
`translateY(${window.innerHeight+100}px)
translateX(${Math.random()*200-100}px)
rotate(720deg)`
}
],

{
duration:
fall*1000,

easing:"linear"

}

);

setTimeout(()=>{

confetti.remove();

},fall*1000);

}

}