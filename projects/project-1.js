console.clear();
console.log('Hello');

const personDOM = document.querySelector('.person');
const quoteDOM = document.querySelector('.quote');
const btnDOM = document.querySelector('#new-quote');

const quotes = [
    {
        quote: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, porro exercitationem enim",
        name: "Lorem1"
    },
    {
        quote: "Sit amet consectetur adipisicing elit. Animi, porro exercitationem enim",
        name: "Lorem2"
    },
    {
        quote: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        name: "Lorem3"
    },
    {
        quote: "Lorem ipsum dolor. Animi, porro exercitationem enim",
        name: "Lorem4"
    },
];

btnDOM.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quoteDOM.innerText = quotes[random].quote;
    personDOM.innerText = quotes[random].name;
})