const inputText = document.getElementById("input");
const btnSubmit = document.querySelector(".btn");
const resultDiv = document.querySelector(".result");


const vowelsCounter = () => {
  let str = inputText.value;
  let counter = 0;
str = str.toLowerCase().split("");

str.map((e) => {
  if (e == "a") {
    counter += 1;
  } else if (e == "e") {
    counter += 1;
  } else if (e == "i") {
    counter += 1;
  } else if (e == "o") {
    counter += 1;
  } else if (e == "e") {
    counter += 1;
  } else if (e == "u") {
    counter += 1;
  }
});
return counter;
};

btnSubmit.addEventListener("click", () => {
  if (!inputText.value) {
    alert("Please enter a text")
  } 
  else {
    resultDiv.innerHTML = `
      <p class="mt-4">
        There are <span id="count" class="text-primary fw-bold fs-4">${vowelsCounter()}</span> vowels
        in <span class="text-danger fw-bold fs-4" id="text">${inputText.value}</span>
      </p>`
    inputText.value = "";
    setTimeout(() => {
      resultDiv.innerHTML = '';
    }, 2000);
  }
});

inputText.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    btnSubmit.click();
  }
  }
);

window.onload = () => {
  inputText.focus();
};




