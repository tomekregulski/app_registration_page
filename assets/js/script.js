var demoDisplay = document.querySelector("#demos");
var demo;

var demoArray = [
{
    prompt: "The answer is yes",
    choices: ["yes", "no", "not", "ain't"],
    correct: "0",
},
{
    prompt: "The answer is also yes",
    choices: ["no", "yes", "not", "ain't"],
    correct: "1",
},
{
    prompt: "The answer might be yes",
    choices: ["no", "not", "yes", "ain't"],
    correct: "2",
},
{
    prompt: "The answer is definitely yes",
    choices: ["no", "ain't", "not", "yes"],
    correct: "3",
},
{
    prompt: "The answer is no",
    choices: ["yes", "no", "not", "ain't"],
    correct: "1",
},
{
    prompt: "The answer is also no",
    choices: ["no", "yes", "not", "ain't"],
    correct: "0",
},
{
    prompt: "The answer might be no",
    choices: ["no", "not", "yes", "ain't"],
    correct: "0",
},
{
    prompt: "The answer is definitely no",
    choices: ["no", "ain't", "not", "yes"],
    correct: "0",
},
{
    prompt: "The answer is not",
    choices: ["yes", "no", "not", "ain't"],
    correct: "2",
},
{
    prompt: "The answer is also not",
    choices: ["no", "yes", "not", "ain't"],
    correct: "2",
},
{
    prompt: "The answer might be not",
    choices: ["no", "not", "yes", "ain't"],
    correct: "1",
},
{
    prompt: "The answer is definitely not",
    choices: ["no", "ain't", "not", "yes"],
    correct: "2",
},
]

askQuestion();

function askQuestion() {
    for (var i = 0; i < demoArray.length; i++) {
    // pulls question info from the array, creates span and button elements
        container = document.createElement('div');
        container.setAttribute('class', 'border');
        title = document.createElement('span');
        title.setAttribute("class", "mt-4 title");
        title.textContent = demoArray[i].prompt;
        brand = document.createElement('span');
        brand.setAttribute("class", "font-weight-lighter");
        brand.textContent = demoArray[i].choices[1];
        store = document.createElement('span');
        store.setAttribute("class", "font-weight-bold");
        store.textContent = demoArray[i].correct;
        demoDisplay.appendChild(container);
        container.appendChild(title);
        container.appendChild(brand);
        container.appendChild(store);
    }
};