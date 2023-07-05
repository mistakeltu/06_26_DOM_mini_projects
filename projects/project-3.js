const contentDOM = document.getElementsByClassName('content');


for(let i = 0; i < contentDOM.length; i++){
    contentDOM[i].addEventListener('click', function(){
        this.classList.toggle('active');
    })
};