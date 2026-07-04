// ===============================
// Elements
// ===============================

const screens = document.querySelectorAll(".screen");

const landing = document.getElementById("landing");
const loading = document.getElementById("loading");
const letter = document.getElementById("letter");
const proposal = document.getElementById("proposal");
const ending = document.getElementById("ending");

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");

const typing = document.getElementById("typing");

const music = document.getElementById("music");

// ===============================
// Helper
// ===============================

function showScreen(screen){

    screens.forEach(s=>s.classList.remove("active"));

    screen.classList.add("active");

}

// ===============================
// Floating Hearts
// ===============================

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.animationDuration=
    (6+Math.random()*6)+"s";

    heart.style.fontSize=
    (18+Math.random()*18)+"px";

    document
    .getElementById("hearts")
    .appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },12000);

}

setInterval(createHeart,350);

// ===============================
// Start Button
// ===============================

startBtn.addEventListener("click",()=>{

    music.play().catch(()=>{});

    showScreen(loading);

    animateLoading();

});

// ===============================
// Loading Animation
// ===============================

function animateLoading(){

    let value=0;

    const timer=setInterval(()=>{

        value++;

        progressBar.style.width=value+"%";

        progressText.innerHTML=value+"%";

        if(value>=100){

            clearInterval(timer);

            setTimeout(()=>{

                showScreen(letter);

                typeMessage();

            },500);

        }

    },40);

}

// ===============================
// Typewriter Message
// ===============================

const message=

`You're still the most important person in my life.

I know I haven't been giving you the time you deserve.

That's completely on me.

You deserve someone who makes you feel loved every single day.

I'm truly sorry if I've made you feel otherwise.

I can't change yesterday...

But I promise to make tomorrow better.

Because no matter how busy life gets...

You'll always be my favorite person.

Will you give me another chance? ❤️`;

function typeMessage(){

typing.innerHTML="";

let i=0;

const speed=35;

const writer=setInterval(()=>{

typing.innerHTML+=message.charAt(i);

i++;

if(i>=message.length){

clearInterval(writer);

}

},speed);

}

nextBtn.addEventListener("click",()=>{

showScreen(proposal);

});
// ===============================
// "Still Angry" Button Escapes
// ===============================

function moveNoButton(){

    const proposalBox =
        document.querySelector("#proposal .glass");

    const maxX =
        proposalBox.clientWidth - noBtn.offsetWidth - 40;

    const maxY =
        proposalBox.clientHeight - noBtn.offsetHeight - 40;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", function(e){

    e.preventDefault();

    moveNoButton();

});

// ===============================
// Yes Button
// ===============================

yesBtn.addEventListener("click", ()=>{

    celebrate();

    setTimeout(()=>{

        showScreen(ending);

    },1200);

});

// ===============================
// Confetti
// ===============================

function celebrate(){

    if(typeof confetti === "undefined") return;

    const duration = 3000;

    const end = Date.now() + duration;

    (function frame(){

        confetti({

            particleCount:5,
            angle:60,
            spread:60,
            origin:{x:0}

        });

        confetti({

            particleCount:5,
            angle:120,
            spread:60,
            origin:{x:1}

        });

        if(Date.now() < end){

            requestAnimationFrame(frame);

        }

    })();

}

// ===============================
// Sparkle Cursor
// ===============================

document.addEventListener("click",(e)=>{

    const sparkle=document.createElement("div");

    sparkle.innerHTML="✨";

    sparkle.style.position="fixed";
    sparkle.style.left=e.clientX+"px";
    sparkle.style.top=e.clientY+"px";

    sparkle.style.pointerEvents="none";
    sparkle.style.fontSize="26px";

    sparkle.style.transition="1s";

    document.body.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.style.transform="translateY(-80px)";
        sparkle.style.opacity="0";

    },10);

    setTimeout(()=>{

        sparkle.remove();

    },1000);

});

// ===============================
// Random Hearts
// ===============================

const emojis = [

"❤️",
"💕",
"💖",
"💗"

];

setInterval(()=>{

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML=
        emojis[Math.floor(Math.random()*emojis.length)];

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=
        (20+Math.random()*20)+"px";

    heart.style.animationDuration=
        (7+Math.random()*5)+"s";

    document
        .getElementById("hearts")
        .appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },12000);

},700);

// ===============================
// Console Message
// ===============================

console.log(
"%cMade with ❤️ for Radki",
"font-size:20px;color:#ff4f8b;font-weight:bold;"
);
