const flipCards = document.querySelectorAll(".flip-card");

const revealOnScroll = () => {
  flipCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.classList.add("scroll-flip");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);

document.querySelector(".reveal-button").addEventListener("click", function () {
  const message = document.querySelector(".hidden-message");
  message.style.display = "block";
  this.style.display = "none";
});

document.querySelector(".reveal-button").addEventListener("click", function () {
  const message = document.querySelector(".hidden-message");
  message.style.display = "block";
  this.style.display = "none";
  
  // Show response buttons after message
  document.querySelector(".response-section").style.display = "block";
});

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const cuteMsg = document.getElementById("cuteMessage");

const noResponses = [
  {
    yes: "Okay ❤️",
    no: "No.",
    msg: "Pleaseeeeeee?"
  },
  {
    yes: "Mhm! <3",
    no: "I'm sorry but...NO",
    msg: "Please give me a chance baby ( ˶•ᴖ•)"
  },
  {
    yes: "Okay! ♡",
    no: "Nah bro",
    msg: "Are you sure? C'mon, Think about it!(ó﹏ò｡)"
  },
  {
    yes: "Okay then :>",
    no: "Nawh",
    msg: "Don't do this to me. Just imagine how happy we'll be :>"
  },
  {
    yes: "Alright",
    no: "NO.",
    msg: "Ah...c'mon Sam, you're breaking my heart 💔"
  },
  {
    yes: "Okayy lucky!",
    no: "Nuh uh",
    msg: "I'll be sad....I'm gonna cry ദ്ദി(╥﹏╥)"
  },
  {
    yes: "YESS",
    no: "NOOO",
    msg: "Pretty please? 🥺"
  }
];

let clickCount = 0;

noBtn.addEventListener("click", function () {
  if (clickCount < noResponses.length) {
    const res = noResponses[clickCount];
    yesBtn.textContent = res.yes;
    noBtn.textContent = res.no;
    cuteMsg.textContent = res.msg;

    // Resize buttons based on round
    if (clickCount === 3) {
      yesBtn.style.fontSize = "18px";
      yesBtn.style.padding = "25px 40px";
    }
    if (clickCount === 4) {
      yesBtn.style.fontSize = "26px";
      yesBtn.style.padding = "30px 50px";
    }
    if (clickCount === 5) {
      yesBtn.style.fontSize = "20px";
      yesBtn.style.padding = "30px 55px";
    }
    if (clickCount === 6) {
      yesBtn.style.fontSize = "22px";
      yesBtn.style.padding = "35px 60px";
    }
    if (clickCount === 5) {
      noBtn.style.fontSize = "12px";
    }
    if (clickCount === 6) {
      noBtn.style.fontSize = "10px";
    }

    clickCount++;
  } else {
    // Final stage: make "No" button avoid the cursor
    noBtn.addEventListener("mousemove", () => {
      const x = Math.floor(Math.random() * 200) - 100;
      const y = Math.floor(Math.random() * 100) - 50;
      noBtn.style.transform = `translate(${x}px, ${y}px)`;
    });
  }
});

yesBtn.addEventListener("click", function () {
  window.location.href = "sec.html"; // Replace with your real URL
  alert("YAAAYYYYYYY!!!!!ʕ -ᴥ•ʔ♡");
});
