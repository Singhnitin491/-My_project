let currntMole;

let pplant;

let score=0;
let gameover=false;

window.onload=function(){
    setGame();
}
function setGame(){
   
    for(let i=0;i<9;i++){
        // div
        let tile= document.createElement('div');
        tile.id=i.toString();
        tile.addEventListener("click",selettile)
        document.getElementById("bord").appendChild(tile)
    }
    setInterval(setMOle,1500);
    setInterval(setp,1500);
}


function getRandom(){
    let num=Math.floor(Math.random()*9)
    return num.toString();

}
function setMOle(){
    if (gameover){
        return;
    }
    if (currntMole) {
        currntMole.innerHTML='';
        
    }
    let mole=document.createElement('img')
    mole.src="./monty-mole.png";
    let num=getRandom();
    if(pplant && pplant.id == num){
        return;
    }
    currntMole=document.getElementById(num)
    currntMole.appendChild(mole);
}


gr=()=>{
    let nun=Math.floor(Math.random()*9)
    return nun.toString();

}
function setp(){
    if (gameover){
        return;
    }
    if (pplant) {
        pplant.innerHTML='';
        
    }
    let plant=document.createElement('img')
    plant.src="./piranha-plant.png";
    let nun=gr();
    if(currntMole && currntMole.id==nun){
        return;
    }
    pplant=document.getElementById(nun)
    pplant.appendChild(plant)
}
function selettile(){
    if (gameover){
        return;
    }
    if(this==currntMole){
        score += 10;
        document.getElementById("score").innerHTML=score.toString();
    }
    else if(this==pplant){
        document.getElementById("score").innerHTML="gameover"+score.toString();
        gameover=true
    }
}