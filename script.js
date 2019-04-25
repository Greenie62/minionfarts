
//get fart divs
var farts=document.querySelectorAll(".farts div")

var farts_array=[]
var colors=[];



//assign background-color
farts.forEach(f=>{
    var fart=f.firstElementChild.firstElementChild.getAttribute('src')
    colors.push(f.attributes.getNamedItem("data-color").value)
  
    console.log(fart)
    farts_array.push(fart)
   // console.log(farts_array)
    f.style.background=f.attributes.getNamedItem("data-color").value
    f.style.borderRadius="40%",
    f.style.marginLeft="1em"

})

var p=""

farts.forEach(f=>{
    f.addEventListener('mouseenter',(e)=>{
        p=document.createElement('p')
        p.appendChild(document.createTextNode('eww'))
        
        e.target.prepend(p)
   })
})

farts.forEach(f=>{
    f.addEventListener("mouseleave",(e)=>{
        e.target.removeChild(p)
    })
})


var names=['cindy','julie','ruby']

//click-event fart



var startBtn=document.querySelector(".startbutton");


startBtn.addEventListener('mouseenter',()=>{
    var random=new Audio(farts_array[Math.floor(Math.random()*farts_array.length-2)]);
     random.play()
    .catch(err=>console.log(err))
   console.log(random)
})

startBtn.addEventListener("click",startGame)

var isRunning=false;
var timeClock=""
var minute=1;
var seconds=10
var cindyfarts=0;
var juliefarts=0;
var rubyfarts=0;
var janellefarts=0;
var jasminefarts=0;
var gameStarted=false;

function startGame(){
    startBtn.style.display='none'
  
    document.getElementById("minute").innerHTML=minute;
    document.getElementById("seconds").innerHTML=":00"
    document.getElementById("playerone").innerHTML=0;
    document.getElementById("playertwo").innerHTML=0;
    document.getElementById("playerthree").innerHTML=0;
    gameStarted=true
    count()

    
}

    farts.forEach((f,index)=>{
        f.addEventListener("click",(e)=>{
            if(!gameStarted){
                document.getElementById("anchor").innerHTML="CLICK fart first!!"
                setTimeout(()=>{
                    document.getElementById("anchor").innerHTML=""
                },2500)
            }
            else{
            var fart=e.target.firstElementChild.firstElementChild.getAttribute('src');
         
            var audio=new Audio(fart)
            console.log(audio)
            audio.play()
            var whoFarted=names[Math.floor(Math.random()*names.length)];
    
            switch(whoFarted){
    
                case "cindy":
                cindyfarts++
                document.getElementById("playerone").innerHTML=cindyfarts;
                break;
    
                case "julie":
                juliefarts++;
                document.getElementById("playertwo").innerHTML=juliefarts;
                break;
    
                case "ruby":
                rubyfarts++;
                document.getElementById("playerthree").innerHTML=rubyfarts;
                break;
    
                case "janelle":
                janellefarts++;
                break;
    
                case "jasmine":
                jasminefarts++;
                break;
            }
        
        makeFart(index)
        }
      // console.log(f.firstElementChild.firstElementChild.getAttribute("src"))
    })

})



function timer(){
    seconds--
    document.getElementById("minute").innerHTML="0:"
    document.getElementById("seconds").innerHTML=seconds;
    if(seconds === 0){
        clearInterval(timeClock)
        document.getElementById("timer").innerHTML="GAS OVER!"
        setTimeout(()=>{
            endGame()
        },2000)
    }
}

function count(){
    if(!isRunning){
      timeClock=setInterval(timer,1000)
      isRunning=true;

    
    }
}


function endGame(){
    if(cindyfarts > juliefarts && cindyfarts > rubyfarts){
        console.log("Cindy is the most cochina!!")
        document.getElementById("timer").innerHTML="Cindy is the most cochina!!"
    }

    if(rubyfarts > cindyfarts && rubyfarts > juliefarts){
        console.log("Julie is the most cochina!!")
        document.getElementById("timer").innerHTML="Julie is the most cochina!!"
    }
    if(rubyfarts > cindyfarts && rubyfarts > juliefarts){
        console.log("Ruby is the most cochina!!")
        document.getElementById("timer").innerHTML="Ruby is the most cochina!!"
    }

    setTimeout(()=>{
        location.reload()
    },3000)

}


function makeFart(index){
    var pics=["./images/minion3.jpg","./images/minionone.jpg"]
    var fart=document.createElement('img');
    fart.className='fart'
    fart.setAttribute("src",pics[Math.floor(Math.random()*pics.length)])
    fart.style.animation="jump 1s ease"
    console.log(fart)
    document.getElementById("anchor").appendChild(fart)

    fart.addEventListener('animationend',()=>{
        document.getElementById("anchor").removeChild(fart)
    })
}

























