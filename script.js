// document.getElementsByClassName('item').addEventListener('mouseover',function(){
//     this.style.filter="grascale(0%)"
// })


window.addEventListener('scroll',function(){
    if(window.scrollY>600){
       document.body.style.background="black";
       document.body.style.color="white";
    }
    else{
        document.body.style.background="white";
        document.body.style.color="black";
    }
})

let fun=()=>{
   document.style.filter='grayscale(0%)';
}