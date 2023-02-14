let loadButton = document.querySelector('#load-button')
let currentItem = 3;

loadButton.onclick =() =>{
    let boxes = [...document.querySelectorAll('.container .box-container .box')];
    for(var i = currentItem; i < currentItem+3; i++){
        boxes[i].style.display = 'inline-block'
    }

    currentItem += 3
}