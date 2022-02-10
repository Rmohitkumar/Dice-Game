var num1 = Math.floor(Math.random()*6) +1;
var imageChange = "dice-" + num1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", "images/" + imageChange);



var num2 = Math.floor(Math.random()*6) +1;
var imageChange = "dice-" + num2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", "images/" + imageChange);

if(num1 > num2){
    document.querySelectorAll("h1")[0].innerHTML = "🚩 Player 1 Wins";
}
else if(num2 > num1){
    document.querySelectorAll("h1")[0].innerHTML = "Player 2 Wins 🚩";
}
else {
    document.querySelectorAll("h1")[0].innerHTML = "🚩 Draw 🚩";
}