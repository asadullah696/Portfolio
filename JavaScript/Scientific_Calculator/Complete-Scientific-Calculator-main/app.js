function clearScreen(){
    var clear = document.getElementById("screen");
    clear.innerText = " ";
}
var inputData;  
function getValue7(){
    var value = 7;
    screen(value);
    console.log(value);
}
function getValue8(){
    var value = 8;
    screen(value);
}
function getValue9(){
    var value = 9;
    screen(value);
}
function getValueMultiply(){
    var value = "*";
    screen(value);
}
function getValue4(){
    var value = 4;
    screen(value);
}
function getValue5(){
    var value = 5;
    screen(value);
}
function getValue6(){
    var value = 6;
    screen(value);
}
function getValueMinus(){
    var value = "-";
    screen(value);
}
function getValue1(){
    var value = 1;
    screen(value);
}
function getValue2(){
    var value = 2;
    screen(value);
}
function getValue3(){
    var value = 3;
    screen(value);
}
function getValuePlus(){
    var value = "+";
    screen(value);
}
function getValue0(){
    var value = 0;
    screen(value);
}
function getValuePoint(){
    var value = ".";
    screen(value);
}
function getValueDivide(){
    var value = "/";
    screen(value);
}
function getValuePercent(){
    // var value = "%";
    // screen(value);
    var value = document.getElementById("screen");
    value = value.innerText;
    var value1 = value/100;
    document.getElementById("screen").innerText = value1;

}
function getValueEquals(){
    var value = "=";
    screen(value);
}
// function tanFn(){
//     var value = document.getElementById("screen");
//     value = value.innerText
//     document.getElementById("screen").innerText = Math.tan(value);
// }
function tanFn(){
    var value = document.getElementById("screen");
    value = value.innerText;
    document.getElementById("screen").innerText = "tan("+value+")     =>   "+Math.tan(value);
} 
function sinFn(){
    var value = document.getElementById("screen");
    value = value.innerText
    document.getElementById("screen").innerText = "sin("+value+")     =>   "+Math.sin(value);
}
function cosFn(){
    var value = document.getElementById("screen");
    value = value.innerText
    document.getElementById("screen").innerText = "cos("+value+")     =>   "+Math.cos(value);
}
// function povSquare(){
//     var value = document.getElementById("screen");
//     value = value.innerText;

//     document.getElementById("screen").innerText = Math.pow(value,2);
// } 
function povSquare(){
    var value = document.getElementById("screen");
    value = value.innerText;
    var value1 = Math.pow(value,2);
        
    document.getElementById("screen").innerHTML = value+"<sup>2</sup> => &nbsp; &nbsp; &nbsp; &nbsp;"+value1;
}
// function povCube(){
//     var value = document.getElementById("screen");
//     value = value.innerText
//     document.getElementById("screen").innerText = Math.pow(value,3);
// }
function povCube(){
    var value = document.getElementById("screen");
    value = value.innerText;
    var value1 = Math.pow(value,3);
        
    document.getElementById("screen").innerHTML = value+"<sup>3</sup> => &nbsp; &nbsp; &nbsp; &nbsp;"+value1;
}
// function squareRoot(){
//     var value = document.getElementById("screen");
//     value = value.innerText
//     document.getElementById("screen").innerText = Math.pow(value,1/2);
// }
function squareRoot(){
    var value = document.getElementById("screen");
    value = value.innerText;
    var value1 = Math.pow(value,1/2);
        
    document.getElementById("screen").innerHTML = "&radic;"+value+" =>&nbsp; &nbsp; &nbsp;"+value1;
}
// function cubeRoot(){
//     var value = document.getElementById("screen");
//     value = value.innerText
//     document.getElementById("screen").innerText = Math.pow(value,1/3);
// }
function cubeRoot(){
    var value = document.getElementById("screen");
    value = value.innerText;
    var value1 = Math.pow(value,1/3);
        
    document.getElementById("screen").innerHTML = "&#x221B;"+value+" =>&nbsp; &nbsp; &nbsp;"+value1;
}
function logFn(){
    var value = document.getElementById("screen");
    value = value.innerText;
    var value1 = Math.log10(value);
    document.getElementById("screen").innerHTML = "log("+value+") =>&nbsp; &nbsp; &nbsp;"+value1;
}
function uponFn(){
    var value = document.getElementById("screen");
    value = value.innerText;
    var value1 = 1/value;
    document.getElementById("screen").innerHTML = "1/"+value+" =>&nbsp; &nbsp; &nbsp;"+value1;
}
function sinhFn(){
    var value = document.getElementById("screen");
    value = value.innerText;
    var value1 = Math.sinh(value);
    document.getElementById("screen").innerHTML = "sinh("+value+") =>&nbsp; &nbsp; &nbsp;"+value1;
}
function coshfn(){
    var value = document.getElementById("screen");
    value = value.innerText;
    var value1 = Math.cosh(value);
    document.getElementById("screen").innerHTML = "cosh("+value+") =>&nbsp; &nbsp; &nbsp;"+value1;
}
function cosecFn(){
    var value = document.getElementById("screen");
    value = value.innerText;
    var value1 = 1/(Math.sin(value));
    document.getElementById("screen").innerText = "cosec("+value+")     =>    "+value1;
}
function secFn(){
    var value = document.getElementById("screen");
    value = value.innerText;
    var value1 = 1/(Math.cos(value));
    document.getElementById("screen").innerText = "sec("+value+")     =>    "+value1;
}
function cotFn(){
    var value = document.getElementById("screen");
    value = value.innerText;
    var value1 = 1/(Math.tan(value));
    document.getElementById("screen").innerText = "tan("+value+")     =>    "+value1;
}
function absfn(){
    var value = document.getElementById("screen");
    value = value.innerText;
    var value1 = Math.abs(value);
    document.getElementById("screen").innerHTML = "|"+value+"| =>  &nbsp; &nbsp;"+value1;
}
function screen(v){
    if (v === "=") {
        inputData = document.getElementById("screen");
        var data = inputData.innerText;
        var total = eval(data);
        
        document.getElementById("screen").innerText = total;
    } 
    else {
        document.getElementById("screen").innerText += v;
    }
}