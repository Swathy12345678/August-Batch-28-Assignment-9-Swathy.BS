
const hours=document.getElementById('hours');
const minutes=document.getElementById('minutes');
const seconds=document.getElementById('seconds');

const ampm = document.getElementById('ampm');








// find out the current time

setInterval(()=>{

   const currentTime=new Date();

   hours.innerHTML = (currentTime.getHours() <10?"0": "") + currentTime.getHours();
   minutes.innerHTML = (currentTime.getMinutes() <10?"0": "") + currentTime.getMinutes();
   seconds.innerHTML = (currentTime.getSeconds()<10?"0" :"") + currentTime.getSeconds();



   if(hours >12){
      hours = hours -12
      ampm.innerHTML = 'AM'
   }



},1000)

  


 



//it automatically call itself


