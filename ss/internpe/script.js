const display = document.getElementById('display');
 let resultDisplayed= false;

    function appendValue(value) {
        const operators=["+","-","*","/"];
        const lastChar=display.value.slice(-1);

        //clear display if new input comes after a result
        if(resultDisplayed){
            if(!operators.includes(value)){
            display.value = "";
            }
            resultDisplayed= false;
        }

        //prevent double operators
        if(operators.includes(lastChar)&& operators.includes(value)){
            return;
        }
      display.value += value;
    }

    function clearDisplay() {
      display.value = "";
      resultDisplayed= false;
    }

    function deleteLast() {
       if(display.value == "Error"){
         display.value ="";
         return;
        }
    display.value = display.value.slice(0, -1);
}

function calculate() {
         try {
              const result = eval(display.value);
               if (!isFinite(result)) {
                display.value = "Error";
               } else {
                 display.value = result;
                }
             resultDisplayed = true;
         } catch {
             display.value = "Error";
             resultDisplayed = true;
}
}