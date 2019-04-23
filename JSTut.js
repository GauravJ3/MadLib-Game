function getPI(iter) {
    let pi = 0, divisor = 1;
    for (i = 0; i <= iter; i++) {
        pi = pi + (4/divisor) - (4/(divisor+2));
        divisor += 4;
    }
    document.getElementById("output1").value = pi.toFixed(10);
}


// 1 1 2 3 5 8 13 .. ..
let fibList = [];
function getFibList(num) {
    for (i = 0; i < num; i++) {
        fibList[i] = fib(i);
    }
    fibList.shift();
    document.getElementById("output1")
    .value = fibList.join(", ");
}

function fib(n) {
    let num = 1, num2 = 0, temp, i = 0;
    while (i < n) {
        temp = num;
        num += num2;
        num2 = temp;
        i++;
    }
    return num2;
}

let mLText = "People ran from ~ yelling because a robbery was taking place\n\
The evil villain Dr. ~ was demanding all the ~ in the city.\n\
Thankfully Captain ~ flew in ~ just in time.\n\
He knocked the infinity gauntlet out of the villain's ~ then made him ~ .\n\
Next he did his ~ one-of-a-kind punch and knocked the villain to the ground.\n\
After tying him up with ~ and handing him over to the ~ , my hero said \" ~ \" before flying off again!\
\nWhat a ~ guy!"


  // convert the string into array
let mLArray = mLText.split(" ");

  // array to hold the user input
let inputArray = [];
  function madLibGenerator() {
      createInputArray();
      if (checkForMissingInput()) {
          document.getElementById("output1").value = "Enter All values above"; 
      }else {
          createMLSentence();
      }
  }


function createInputArray() {
    for (i = 0; i < 12; i++) {
        inputArray[i] = document.getElementById("i" + i)
        .value;
        //alert(inputArray);
    }
}

function checkForMissingInput() {
    let defaultArrayVals = ["Person", "Noun", "Verb", "Noun","Prural Verb", "Body Part", "Adjective", "Adjective","Noun", "Profession", "Quote you Like", "Adjective"];

    for (i = 0; i < inputArray.length; i++) {
        if (defaultArrayVals.indexOf(inputArray[i]) > - 1) {
            return true;
        }
    }
    return false;
}

function createMLSentence()
{
    let arrIndex = 0;
    for (i = 0; i < mLArray.length; i++) {
        let matchIndex = mLArray.indexOf("~");
        mLArray[matchIndex] = inputArray[arrIndex];
        arrIndex++;
    }
    document.getElementById("output1")
    .value = mLArray.join(" ");
}

