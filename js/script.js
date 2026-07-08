const text = [

"Building useful tools...",

"Learning Japanese...",

"Creating open source projects..."

];

let index = 0;

const typing = document.getElementById("typing");

function changeText(){

    typing.style.opacity=0;

    setTimeout(()=>{

        typing.textContent=text[index];

        typing.style.opacity=1;

        index++;

        if(index>=text.length){

            index=0;

        }

    },250);

}

changeText();

setInterval(changeText,3000);