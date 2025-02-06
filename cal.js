let btn1 = document.querySelectorAll("button");
let oper = document.querySelectorAll(".oper");
let calcu = document.querySelector("calcu");
let inp = document.querySelector(".inp");
let string = "";
Array.from(btn1).forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      try {
        string = eval(string);
        inp.value = string;
      } catch (error) {
        string = "Error";
        inp.value = string;
      }
    } else if (e.target.innerHTML == "AC" || e.target.innerHTML == "C") {
      string = "";
      inp.value = string;
    } else if (e.target.innerHTML === "DEL") {
      string = string.substring(0, string.length - 1);
      inp.value = string;
    } else {
      // console.log(e.target.innerHTML);
      string = string + e.target.innerHTML;
      inp.value = string;
    }
  });
});


