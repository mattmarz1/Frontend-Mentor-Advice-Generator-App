const adviceEl = document.querySelector(".advice q");
const diceCircleEl = document.querySelector(".dice-circle");


generateAdvice();

function generateAdvice() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  fetch("https://api.adviceslip.com/advice?t=" + Math.random(), config).then(
    function (res) {
      res.json().then(function (data) {
        console.log(data);
        adviceEl.innerText = data.slip.advice;
      });
    }
  );
}

diceCircleEl.addEventListener("click", function() {
    generateAdvice();
})
