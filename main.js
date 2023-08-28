/*global $*/

let operator1 = document.getElementById("button1");
let operator2 = document.getElementById("button2");
let operator3 = document.getElementById("button3");
let operator4 = document.getElementById("button4");
let operator5 = document.getElementById("button5");
let result = document.getElementById("result");


function onclickButton(number) {
   let result = document.getElementById("result");
   let numberValue = number.innerHTML;

   if (numberValue == "AC") {
      result.innerHTML = "0";
   }
   else if (numberValue == "=") {
      result.innerHTML = eval(result.innerHTML);
   }
   else {
      if (result.innerHTML == "0") {
         result.innerHTML = numberValue;
      }
      else {
         result.innerHTML = result.innerHTML + numberValue;
      }
   }
}


$("#button1").click(function() {
   //let result = document.getElementById("result");
   let operator1Value = operator1.innerHTML;
   let text1 = $("#result").text();
   if (text1.slice(-1) == "+" || text1.slice(-1) == "-" || text1.slice(-1) == "*" || text1.slice(-1) == "/" || text1.slice(-1) == ".") {
      result.innerHTML = result.innerHTML.slice(0, -1) + operator1Value;
   }
   else {
      if (text1.slice(-1) != "+" || text1.slice(-1) != "-" || text1.slice(-1) != "*" || text1.slice(-1) != "/" || text1.slice(-1) != ".") {
         result.innerHTML = result.innerHTML + operator1Value;
      }
   }
});

$("#button2").click(function() {
   //let result = document.getElementById("result");
   let operator2Value = operator2.innerHTML;
   let text2 = $("#result").text();
   if (text2.slice(-1) == "+" || text2.slice(-1) == "-" || text2.slice(-1) == "*" || text2.slice(-1) == "/" || text2.slice(-1) == ".") {
      result.innerHTML = result.innerHTML.slice(0, -1) + operator2Value;
   }
   else {
      if (text2.slice(-1) != "+" || text2.slice(-1) != "-" || text2.slice(-1) != "*" || text2.slice(-1) != "/" || text2.slice(-1) != ".") {
         result.innerHTML = result.innerHTML + operator2Value;
      }
   }
});

$("#button3").click(function() {
   //let result = document.getElementById("result");
   let operator3Value = operator3.innerHTML;
   let text3 = $("#result").text();
   if (text3.slice(-1) == "+" || text3.slice(-1) == "-" || text3.slice(-1) == "*" || text3.slice(-1) == "/" || text3.slice(-1) == ".") {
      result.innerHTML = result.innerHTML.slice(0, -1) + operator3Value;
   }
   else {
      if (text3.slice(-1) != "+" || text3.slice(-1) != "-" || text3.slice(-1) != "*" || text3.slice(-1) != "/" || text3.slice(-1) != ".") {
         result.innerHTML = result.innerHTML + operator3Value;
      }
   }
});

$("#button4").click(function() {
   //let result = document.getElementById("result");
   let operator4Value = operator4.innerHTML;
   let text4 = $("#result").text();
   if (text4.slice(-1) == "+" || text4.slice(-1) == "-" || text4.slice(-1) == "*" || text4.slice(-1) == "/" || text4.slice(-1) == ".") {
      result.innerHTML = result.innerHTML.slice(0, -1) + operator4Value;
   }
   else {
      if (text4.slice(-1) != "+" || text4.slice(-1) != "-" || text4.slice(-1) != "*" || text4.slice(-1) != "/" || text4.slice(-1) != ".") {
         result.innerHTML = result.innerHTML + operator4Value;
      }
   }
});

$("#button5").click(function() {
   let operator5Value = operator5.innerHTML;
   let text5 = $("#result").text();
   if (text5.slice(0, 2) == "00") {
      result.innerHTML = result.innerHTML.slice(0, -1) + operator5Value;
   }
         else {
         if (text5.indexOf(operator5Value)>-1) {
            result.innerHTML = result.innerHTML + operator5Value.slice(0, -1);
         }
   else {
      if (text5.slice(-1) == "." || text5.slice(-1) == "+" || text5.slice(-1) == "-" || text5.slice(-1) == "*" || text5.slice(-1) == "/") {
         result.innerHTML = result.innerHTML.slice(0, -1) + operator5Value;
      }

         else {
            result.innerHTML = result.innerHTML + operator5Value;
         }
      }
   }
})
