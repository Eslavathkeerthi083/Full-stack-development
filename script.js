const questions = [

{
question:"Which language is used for styling web pages?",
options:["HTML","CSS","Python","Java"],
answer:"CSS"
},

{
question:"Which company developed JavaScript?",
options:["Microsoft","Apple","Netscape","Google"],
answer:"Netscape"
},

{
question:"Which method selects an element by ID?",
options:[
"querySelector()",
"getElementById()",
"createElement()",
"appendChild()"
],
answer:"getElementById()"
},

{
question:"DOM stands for?",
options:[
"Document Object Model",
"Data Object Model",
"Desktop Object Management",
"Document Oriented Method"
],
answer:"Document Object Model"
},

{
question:"Which keyword declares a variable?",
options:[
"int",
"let",
"float",
"char"
],
answer:"let"
},

{
question:"Which symbol is used for single-line comments?",
options:[
"//",
"/*",
"#",
"--"
],
answer:"//"
},

{
question:"Which function shows an alert box?",
options:[
"confirm()",
"prompt()",
"alert()",
"message()"
],
answer:"alert()"
},

{
question:"Which event occurs when a button is clicked?",
options:[
"onload",
"onclick",
"onchange",
"onmouseover"
],
answer:"onclick"
},

{
question:"Which loop executes at least once?",
options:[
"for",
"while",
"do...while",
"foreach"
],
answer:"do...while"
},

{
question:"JavaScript is a ______ language.",
options:[
"Programming",
"Database",
"Operating System",
"Markup"
],
answer:"Programming"
}

];

let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 15;

const question = document.getElementById("question");
const options = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const result = document.getElementById("result");
const time = document.getElementById("time");

function startTimer(){

clearInterval(timer);

timeLeft = 15;

time.textContent = timeLeft;

timer = setInterval(function(){

timeLeft--;

time.textContent = timeLeft;

if(timeLeft<=0){

clearInterval(timer);

currentQuestion++;

if(currentQuestion<questions.length){

loadQuestion();

}
else{

showResult();

}

}

},1000);

}

function loadQuestion(){

startTimer();

const q = questions[currentQuestion];

question.textContent = q.question;

options.innerHTML = "";

q.options.forEach(function(option){

const btn = document.createElement("button");

btn.innerText = option;

btn.className = "option";

btn.onclick = function(){

checkAnswer(btn,option);

};

options.appendChild(btn);

});

}

function checkAnswer(button,selected){

clearInterval(timer);

const correct = questions[currentQuestion].answer;

const buttons = document.querySelectorAll(".option");

buttons.forEach(function(btn){

btn.disabled = true;

if(btn.innerText===correct){

btn.classList.add("correct");

}

});

if(selected===correct){

score++;

}
else{

button.classList.add("wrong");

}

}

nextBtn.addEventListener("click",function(){

currentQuestion++;

if(currentQuestion<questions.length){

loadQuestion();

}
else{

showResult();

}

});

function showResult(){

clearInterval(timer);

question.style.display="none";

options.style.display="none";

nextBtn.style.display="none";

document.getElementById("timer").style.display="none";

result.innerHTML="Quiz Completed!<br><br>Your Score: "+score+" / "+questions.length+
"<br><br><button onclick='location.reload()'>Restart Quiz</button>";

}

loadQuestion();