console.clear();
console.log('waze');

const openDOM = document.querySelector('#open-btn');
const closeDOM = document.querySelector('#close-btn');
const containerDOM = document.querySelector('#container');

openDOM.addEventListener('click', function(){
    containerDOM.style.display = 'block';
})

closeDOM.addEventListener('click', function(){
    containerDOM.style.display = 'none';
})

window.addEventListener('click', function(e){
    if(e.target === containerDOM){
        containerDOM.style.display = 'none';
    }
})