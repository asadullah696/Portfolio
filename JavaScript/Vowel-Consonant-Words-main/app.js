
function addword() {
    var userInput = document.getElementById("userinput").value;
    var userValue = userInput.toLowerCase();
    var vowels = [];
    var consonants = [];
    var boolean = false;
    
    for(i = 0; i < userValue.length; i++){
        if(userValue[i] === "a" || userValue[i] === "e" || userValue[i] === "i" || userValue[i] === "o" || userValue[i] === "u" ){   
            boolean = true;break;
        }
    }
    if(boolean === true){
        vowels.push(userInput);
    }
    else{
        consonants.push(userInput);
    }
    for(j = 0; j < vowels.length; j++){
        document.getElementById("vowelwords").innerHTML += "<li>"+ vowels[j] + "</li>";
    }
    for(k = 0; k < consonants.length; k++){
        document.getElementById("consonantwords").innerHTML += "<li>"+ consonants[k] + "</li>";
    }
}