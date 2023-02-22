let winDom = document.querySelector('#wins')
let losesDom = document.querySelector('#losses')
let pointDom = document.querySelector('#point')
let randomDom = document.querySelector('#random-score')
let win = 0
let loss = 0
let point =0
let randomScore = getRandom()
function getRandom(){
    return Math.floor(Math.random()*100)
}

function getInfo(){
    winDom.innerHTML = win
    losesDom.innerHTML = loss
    pointDom.innerHTML = point
    randomDom.innerHTML = randomScore
}
let diamonds = document.querySelectorAll('.btn-diamond')
diamonds.forEach(item=>{
    item.addEventListener('click',()=>{
        point+= Number(item.dataset.deyer)
        if(point === randomScore){
            win+=1
            point = 0
            randomScore = getRandom()
            getInfo()
        }
        else if(point > randomScore){
            loss +=1
            point=0
            randomScore = getRandom()
            getInfo()
        }
        else{
            getInfo()
        }
    })
})
getInfo()