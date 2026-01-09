// Greet Button
const greetBtn = document.getElementById("greetBtn");
if (greetBtn) {
    greetBtn.addEventListener("click", () => {
        alert("Welcome! Enjoy exploring my website.");
    });
}


let flickerInterval = null;
let isFlickering = false;

const bgBtn = document.getElementById("bgBtn");
if (bgBtn) {
    bgBtn.addEventListener("click", () => {
        if (!isFlickering) {
            
            flickerInterval = setInterval(() => {
                const randomColor = `hsl(${Math.random() * 360}, 70%, 80%)`;
                document.body.style.background = randomColor;
            }, 100); 

            isFlickering = true;
        } else {
           
            clearInterval(flickerInterval);
            document.body.style.background = "white";
            isFlickering = false;
        }
    });
}



const learnBtns = document.querySelectorAll(".learnMore");
learnBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        alert("More details will be added soon!");
    });
});