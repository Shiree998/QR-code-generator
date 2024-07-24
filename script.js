let input=document.getElementById('userInput');
let img=document.getElementById('QRImage');
let generate=document.getElementById('generate');
let link=document.querySelector('a');
generate.addEventListener('click',()=>{
    if (input.ariaValueMax.length>0){
        img.src=`image/QRcode.png=${input.valu}`
    }
})
