// Marksheet with Java_Script

var rollNo = parseInt(prompt("Enter Your Roll No"));
document.getElementById('rollno').innerText = rollNo;

var userName = prompt("Enter Your Name");
document.getElementById("name").innerText = userName;

var fatherNAme = prompt("Enter Your Father Name");
document.getElementById("fathername").innerText = fatherNAme;

var dob = (prompt("Enter Your Date of Birth"));
document.getElementById("dob").innerText = dob;

var urdu1 = parseInt(prompt("Enter your 9th class Urdu Marks"));
document.getElementById("urdu1").innerText = urdu1;
var urdu2 = parseInt(prompt("Enter Your 10th class Urdu Marks"));
document.getElementById("urdu2").innerText = urdu2;
var totalUrdu = urdu1 + urdu2;
document.getElementById("urdutotal").innerText = totalUrdu;
var per = 100;
var urduPer = totalUrdu*per / 150;
document.getElementById("urduper").innerText = urduPer.toFixed(2) + "%";
if(urduPer >= 33){
    document.getElementById("urdugrd").innerText = "Pass"
}else if(urduPer < 33){
    document.getElementById("urdugrd").innerText = "Fail"
}


var english1 = parseInt(prompt("Enter your 9th class English Marks"));
document.getElementById("english1").innerText = english1;
var english2 = parseInt(prompt("Enter Your 10th class English Marks"));
document.getElementById("english2").innerText = english2;
var totalEnglish = english1 + english2;
document.getElementById("englishtotal").innerText = totalEnglish;
var englishPer = totalEnglish*per / 150;
document.getElementById("englishper").innerText = englishPer.toFixed(2) + "%";
if(englishPer >= 33){
    document.getElementById("englishgrd").innerText = "Pass"
}else if(englishPer < 33){
    document.getElementById("englishgrd").innerText = "Fail"
}

var math1 = parseInt(prompt("Enter your 9th class Mathematics Marks"));
document.getElementById("math1").innerText = math1;
var math2 = parseInt(prompt("Enter Your 10th class Mathematics Marks"));
document.getElementById("math2").innerText = math2;
var totalMath = math1 + math2;
document.getElementById("mathtotal").innerText = totalMath;
var mathPer = totalMath*per / 150;
document.getElementById("mathper").innerText = mathPer.toFixed(2) + "%";
if(mathPer >= 33){
    document.getElementById("mathgrd").innerText = "Pass"
}else if(mathPer < 33){
    document.getElementById("mathgrd").innerText = "Fail"
}

var islamiyat1 = parseInt(prompt("Enter your 9th class Islamiyat Marks"));
document.getElementById("islamiyat1").innerText = islamiyat1;
var islamiyat2 = parseInt(prompt("Enter Your 10th class Islamiyat Marks"));
document.getElementById("islamiyat2").innerText = islamiyat2;
var totalIslamiyat = islamiyat1 + islamiyat2;
document.getElementById("islamiyattotal").innerText = totalIslamiyat;
var islamiyatPer = totalIslamiyat*per / 100;
document.getElementById("islamiyatper").innerText = islamiyatPer.toFixed(2) + "%";
if(islamiyatPer >= 33){
    document.getElementById("islamiyatgrd").innerText = "Pass"
}else if(islamiyatPer < 33){
    document.getElementById("islamiyatgrd").innerText = "Fail"
}

var sst1 = parseInt(prompt("Enter your 9th class Social Studies Marks"));
document.getElementById("sst1").innerText = sst1;
var sst2 = parseInt(prompt("Enter Your 10th class Social Studies Marks"));
document.getElementById("sst2").innerText = sst2;
var totalSst = sst1 + sst2;
document.getElementById("ssttotal").innerText = totalSst;
var sstPer = totalSst*per / 100;
document.getElementById("sstper").innerText = sstPer.toFixed(2) + "%";
if(sstPer >= 33){
    document.getElementById("sstgrd").innerText = "Pass"
}else if(sstPer < 33){
    document.getElementById("sstgrd").innerText = "Fail"
}


var phy1 = parseInt(prompt("Enter your 9th class Physics Marks"));
document.getElementById("phy1").innerText = phy1;
var phy2 = parseInt(prompt("Enter Your 10th class Physics Marks"));
document.getElementById("phy2").innerText = phy2;
var totalPhy = phy1 + phy2;
document.getElementById("phytotal").innerText = totalPhy;
var phyPer = totalPhy*per / 150;
document.getElementById("phyper").innerText = phyPer.toFixed(2) + "%";
if(phyPer >= 33){
    document.getElementById("phygrd").innerText = "Pass"
}else if(phyPer < 33){
    document.getElementById("phygrd").innerText = "Fail"
}

var che1 = parseInt(prompt("Enter your 9th class Chemistry Marks"));
document.getElementById("che1").innerText = che1;
var che2 = parseInt(prompt("Enter Your 10th class Chemistry Marks"));
document.getElementById("che2").innerText = che2;
var totalChe = che1 + che2;
document.getElementById("chetotal").innerText = totalChe;
var chePer = totalChe*per / 150;
document.getElementById("cheper").innerText = chePer.toFixed(2) + "%";
if(chePer >= 33){
    document.getElementById("chegrd").innerText = "Pass"
}else if(chePer < 33){
    document.getElementById("chegrd").innerText = "Fail"
}


var bio1 = parseInt(prompt("Enter your 9th class Biology Marks"));
document.getElementById("bio1").innerText = bio1;
var bio2 = parseInt(prompt("Enter Your 10th class Biology Marks"));
document.getElementById("bio2").innerText = bio2;
var totalBio = bio1 + bio2;
document.getElementById("biototal").innerText = totalBio;
var bioPer = totalBio*per / 150;
document.getElementById("bioper").innerText = bioPer.toFixed(2) + "%";
if(bioPer >= 33){
    document.getElementById("biogrd").innerText = "Pass"
}else if(bioPer < 33){
    document.getElementById("biogrd").innerText = "Fail"
}

var nineTotal = urdu1 + english1 + math1 + islamiyat1 + sst1 + phy1 + che1 + bio1 ;
document.getElementById("ninetotal").innerText = nineTotal;
var tenTotal = urdu2 + english2 + math2 + islamiyat2 + sst2 + phy2 + che2 + bio2 ;
document.getElementById("tentotal").innerText = tenTotal;
var netTotal = nineTotal + tenTotal ;
document.getElementById("nettotal").innerText = netTotal;
var pertotal = netTotal*100 / 1010;
document.getElementById("pertotal").innerText = pertotal.toFixed(3);
if(pertotal >= 33){
    document.getElementById("gradetotal").innerText = "Pass"
}else if(pertotal < 33){
    document.getElementById("gradetotal").innerText = "Fail"
}











