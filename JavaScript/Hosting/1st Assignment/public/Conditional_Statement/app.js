
var userName=prompt("Enter your Name");
alert("Hello "+ userName);

var fatherName=prompt("Enter you Father Name");
alert("Welcome " + userName + " Son of "+ fatherName);

var digit=Number(prompt("Enter a number to print its multiplication table"));

alert(digit +" * " + " 1 = "+ digit*1 + "\n" + 
      digit +" * " + " 2 = "+ digit*2 + "\n" +
      digit +" * " + " 3 = "+ digit*3 + "\n" +
      digit +" * " + " 4 = "+ digit*4 + "\n" +
      digit +" * " + " 5 = "+ digit*5 + "\n" +
      digit +" * " + " 6 = "+ digit*6 + "\n" +
      digit +" * " + " 7 = "+ digit*7 + "\n" +
      digit +" * " + " 8 = "+ digit*8 + "\n" +
      digit +" * " + " 9 = "+ digit*9 + "\n" +
      digit +" * " + " 10 = "+ digit*10 );

var gender=prompt("Enter your Gender");

var m="male"
var fm="female"

if(gender==fm){
    alert("Welcome! Mam "+ userName  );
}
else if(gender==m){
    alert("Welcome! Sir "+ userName);
}

var signal=prompt("Enter Red,Blue and Yellow color to show their traffic sign.")
var red="red"
var green="green"
var yellow="yellow"

if(signal==red){
    alert("Red Color is to stop at signal")
}
else if(signal==yellow){
    alert("Yellow color is for ready to go onward.")
}
else if(signal==green){
    alert("Green color is for moving without any break.")
}


alert("Let's start a Game! \n Right Answer = +5 \n Wrong Answer = -5");
var one=Number(prompt("Write a Number that divide by 3 to get 27"));
var a=81;
if(one==a){
    alert("Right Answer +5")
}
else {
    alert("Wrong Answer -5")
}

var two=Number(prompt("Write a Number that multiply by 3 to get 27"));
var b=9;
if(two==b){
    alert("Right Answer +5")
}
else {
    alert("Wrong Answer -5")
}

var three=Number(prompt("What the Number that multiply by 16 then divide by 8...if the answer is  20"));
var c=10;
if(three==c){
    alert("Right Answer +5")
}
else {
    alert("Wrong Answer -5")
}

var four=Number(prompt("Write a Number that can be multiply by 3 and divde by 3 to get same answer."));
var d=0;
if(four==d){
    alert("Right Answer +5")
}
else {
    alert("Wrong Answer -5")
}

var five=Number(prompt("What the value of Pi in points."));
var e=3.14;
if(five==e){
    alert("Right Answer +5")
}
else {
    alert("Wrong Answer -5")
}

alert("Let's Shop Some Clothe.")
var shirt=Number(prompt("How much shirt you want to purchase? \n each shirt price is 750pkr"))
var tshrt=shirt*750;
alert("Total Price of " +shirt+" is " + tshrt)
var pent=Number(prompt("How many pents you want to purchse? Each pent price is 1000pkr"))
var pents=pent*1000;
alert("Total Price of " + pent + " is " + pents);
var total=tshrt+pents;
alert("Total Price of Clothe are "+ total )