alert(" ASADULLAH \n KH01210812951 \n 3rd Assignment")

var empty = [];
document.write("<h3>Q.1 Empty array with literal notation</h3>");
document.write(empty);

var emptyTwo = [];
document.write("<h3>Q.2 Empty array with object notation.</h3>");
document.write(emptyTwo)

var stringArray = ["telephone", "airplane", "helicopter"];
document.write("<h3>Q.3 Strings Array.</h3>");
document.write("[" + stringArray + "]");

var numberArray = [2, 3, 4];
document.write("<h3>Q.4 Numbers Array.</h3>");
document.write("[" + numberArray + "]");

var booleanArray = ["true", "false"];
document.write("<h3>Q.5 Boolean Array.</h3>");
document.write("[" + booleanArray + "]");

var mixedArray = ["kite", "cap", 6, 8, "true", "false"];
document.write("<h3>Q.6 Mixed Array.</h3>");
document.write("[" + mixedArray + "]");

var mobNets = ["Telenor", "Zong", "Jazz/Warid", "Ufone"];
document.write("<h3>Q.7 Array with Networks available in Pakistan</h3>");
document.write(mobNets[0] + "<br/>" + mobNets[1] + "<br/>" +  mobNets[2] + "<br/>" +  mobNets[3] + "<br/>");

var eduQual = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
document.write("<h3>Q.8 Array with Education Qualifications available in Pakistan</h3>");
document.write("<h3>Qualifications:</h3> <br/>" + eduQual[0] + "<br/>" + eduQual[1] + "<br/>" + eduQual[2] + "<br/>" + eduQual[3] + "<br/>" + eduQual[4] + "<br/>" + eduQual[5] + "<br/>" + eduQual[6] + "<br/>" + eduQual[7] + "<br/>");

var topMov = ["Avengers: Age of Ultron", "Spectre", "Jurassic World", "Inside Out"];
document.write("<h3>Q.9 Array with Top Movies of 2015</h3>");
document.write(topMov[0] + "<br/>" + topMov[1] + "</br>" + topMov[2] + "</br>" + topMov[3]);

var favCars = ["Audi", "Ford", "Chevrolet", "Bugatti", "Mercedes-Benz<br/>"];
document.write("<h3>Q.10 Array with My Favorite Cars.</h3> <h3>Favorite Cars<br/></h3>");
document.write(favCars[0] + "," + favCars[1] + "," + favCars[2] + "," + favCars[3] + "," + favCars[4] + "<br/>");
document.write("First index of the array: 0"  +"<br/>" + "Car at first index of the array: " + favCars[0] +"<br/>" + "Last index of the array: 4"  +"<br/>" + "Car at last index of the array: " + favCars[4] +"<br/>");

var nameStu = ["Sam", "Mike", "John"];
document.write("<h3>Q.11 Array with student's names, scores and their percentages</h3>");
var stuScore = ["240", "420", "370"];
document.write("Score of " + nameStu[0] + " is " + stuScore[0] + ". Percentage :" + stuScore[0]/500*100 + "% <br/>" + "Score of " + nameStu[1] + " is " + stuScore[1] + ". Percentage :" + stuScore[1]/500*100 + "% <br/>" + "Score of " + nameStu[2] + " is " + stuScore[2] + ". Percentage :" + stuScore[2]/500*100 + "% <br/>");

var colName = ["red", "yellow", "green", "blue", "purple", "orange", "brown"];
document.write("<h3>Q.12 Array with color names</h3>");
document.write([ "<b>" + colName[0] + "," + colName[1] + "," + colName[2] + "," + colName[3] + "," + colName[4] + "," + colName[5] + "," + colName[6] + "<br/><br/></b>"]);
colName.unshift("pink", "black");
document.write("C) "+ [colName[0] + "," + colName[1] + "," + colName[2] + "," + colName[3] + "," + colName[4] + "," + colName[5] + "," + colName[6] + "," + colName[7] + "," + colName[8] + "<br/>"])
colName.shift();
document.write("D) "+ [colName[0] + "," + colName[1] + "," + colName[2] + "," + colName[3] + "," + colName[4] + "," + colName[5] + "," + colName[6] + "," + colName[7] +"<br/>" ]);
colName.pop();
document.write("E) "+ [colName[0] + "," + colName[1] + "," + colName[2] + "," + colName[3] + "," + colName[4] + "," + colName[5] + "," + colName[6] +"<br/>" ]);
var colBeg = prompt("Which color should add to the beginning");
var colEnd = prompt("Which color should add to the end");
var indAdd = prompt("At which index a color should add");
var indDel = prompt("At which index a color should delete");



var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selCities = cities.slice(2, 4);
document.write("<h3> Q.15 Array with city names and copy two city names to a new array </h3>");
document.write(cities[0] + "," + cities[1] + "," + cities[2] + "," + cities[3] + "," + cities[4] + "<br/>");
document.write(selCities[0] + "," + selCities[1] + "<br/>");

var devices = ["Out:", "Monitor", "Out:", "Printer", "Out:", "Mouse", "Out:", "Keyborad"];
document.write("<h3>Q.18 Array with Education Qualifications available in Pakistan</h3>");
document.write("<h3>Devices:</h3> <br/>" + devices[0] + "<br/>" + devices[1] + "<br/>" + devices[2] + "<br/>" + devices[3] + "<br/>" + devices[4] + "<br/>" + devices[5] + "<br/>" + devices[6] + "<br/>" + devices[7])

