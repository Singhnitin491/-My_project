let boxes=document.querySelectorAll('.box')
let reset=document.querySelector('#btn')
let ngbtn=document.querySelector('#btn1')
let msg=document.querySelector('.msg')
let para=document.querySelector('.p')
let turno=true

const winpattrns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]


]
// console.log(winpattrns.length)
// function clicked(){
//     console.log("box was clicked");
//     bo
    
// }

boxes.forEach(function(box){
    box.addEventListener('click',function(){
        console.log("box was clicked");
        // box.innerText='omg'
        if(turno){
            box.innerHTML="O"
            turno=false
        }
        else{
            box.innerHTML="X"
            turno=true

        }
        box.disabled=true
        checkwinner()

    })})

    const enanblebox=()=>{
        for(let box of boxes){
            box.disabled=false
            box.innerText='';

        }
       

    }

    const disablebtns=()=>{
        for(let box of boxes){
            box.disabled=true
        }
    }
    function showwinnwe(winner){
        para.innerHTML=`congratulations the winner is${winner} `

        msg.classList.remove("hide")
        disablebtns()
    
    }
    const resetgame =()=>{
        turno =true
       
        enanblebox()
        msg.classList.add('hide');

    }

    

    function checkwinner(){
        for(let pattern of winpattrns){
        pasval1=boxes[pattern[0]].innerText,
        pasval2=boxes[pattern[1]].innerText,
        pasval3=boxes[pattern[2]].innerText
    
        if(pasval1 !="" && pasval2 !="" && pasval3 !=""){
            if(pasval1 === pasval2 && pasval2 === pasval3){
                console.log('winnr', pasval1)
                showwinnwe(pasval1)
    
            }
    
        }
            
        }
    };

    ngbtn.addEventListener('click',resetgame)
    reset.addEventListener('click',resetgame)

