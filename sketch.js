const container = document.querySelector('.container')
function createDiv(num){
    for(let i = 0; i < num ; i++){
        const div = document.createElement('div')
        div.classList.add('container-item')
        container.appendChild(div);
        for(let i = 0; i < num ; i++){
            const div2 = document.createElement('div')
            div2.classList.add('item')
            div.appendChild(div2)
        }
    }
    
}
createDiv(16)
function removeCell(parent){
    while (parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

const sizeSlider = document.getElementById('size-slider')
sizeSlider.addEventListener('change', function(event){
    num = event.target.value
    removeCell(container);
    createDiv(num);
    let gridItems = document.querySelectorAll('.item')
    colorBtn.addEventListener('click', function(){
        const colorPicker = document.getElementById('color-picker')
        gridItems.forEach(gridItem => {
            gridItem.addEventListener('mouseover', function(){
                gridItem.style.backgroundColor = colorPicker.value
            })
        })
    })

    eraserBtn.addEventListener('click', function(){
        gridItems.forEach(gridItem => {
            gridItem.addEventListener('mouseover', function(){
                gridItem.style.backgroundColor = 'white'
            })
        })
    })
    let color = ["#3C9EE7", "#E7993C", "#E73C99", "#3CE746", "#E7993C"]
    rainbowBtn.addEventListener('click', function(){
        gridItems.forEach(gridItem => {
            gridItem.addEventListener('mouseover', function(){
                gridItem.style.backgroundColor = color[Math.floor(Math.random() * color.length)];
            })
        })
    })
    clear.addEventListener('click', function(){
        let sitem = document.querySelectorAll('.item')
        sitem.forEach(box => {
            box.style.backgroundColor = 'white'
        })
     })
    
})


sizeSlider.addEventListener('input', function(event){
    document.getElementById('size-value').innerHTML = event.target.value + " " + "x" + " " + event.target.value
})

let gridItems = document.querySelectorAll('.item')
const eraserBtn = document.getElementById('eraser-btn')
eraserBtn.addEventListener('click', function(){
    gridItems.forEach(gridItem => {
        gridItem.addEventListener('mouseover', function(){
            gridItem.style.backgroundColor = 'white'
        })
    })
})
let color = ["#3C9EE7", "#E7993C", "#E73C99", "#3CE746", "#E7993C"]
const rainbowBtn = document.getElementById('rainbow-btn')
rainbowBtn.addEventListener('click', function(){
    gridItems.forEach(gridItem => {
        gridItem.addEventListener('mouseover', function(){
            gridItem.style.backgroundColor = color[Math.floor(Math.random() * color.length)];
        })
    })
})

const colorBtn = document.getElementById('color-btn')
colorBtn.addEventListener('click', function(){
    const colorPicker = document.getElementById('color-picker')
    gridItems.forEach(gridItem => {
        gridItem.addEventListener('mouseover', function(){
            gridItem.style.backgroundColor = colorPicker.value
        })
    })
})
document.addEventListener("DOMContentLoaded", function(event) { 
    document.getElementById("color-btn").click();
 });
 
let button = document.querySelectorAll('.button')
for(var i =0; i< button.length; i++){
         button[i].onclick = function(){
            button.forEach(function(btn){
                btn.style = '';
            });
            this.style.backgroundColor = '#333';
            this.style.color='white';
            this.style.border= 'none';
            this.style.borderRadius="5px";
        }
 }
 const clear = document.getElementById('clear-btn')
 clear.addEventListener('click', function(){
    let sitem = document.querySelectorAll('.item')
    sitem.forEach(box => {
        box.style.backgroundColor = 'white'
    })
 })
 