console.log("script running..")
document.querySelector('.cross').style.display = 'none' ;
document.querySelector('.hamburger').addEventListener("click", ()=>{
   document.querySelector('.sidebar').classList.toggle('sidebarGo');
   if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
    document.querySelector('.ham').style.display = 'inline'
    document.querySelector('.cross').style.display = 'none'
   }
   else{
    document.querySelector('.ham').style.display = 'none'
    setTimeout(()=>{
    document.querySelector('.cross').style.display = 'inline'
    }, 300);
   }

})

async function sharePage(){
   await navigator.share({
      title:document.title,
      url:window.location.href
   })
}