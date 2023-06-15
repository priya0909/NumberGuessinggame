let firstnumber=document.getElementById("firstnumber");
let secondnumber=document.getElementById("secondnumber");
let Output=document.getElementById("Output");
let Result=document.getElementById("finalResult");


function start(){
firstnumber.textContent=Math.floor(Math.random() * 100);
secondnumber.textContent=Math.floor(Math.random() * 100);
}
function addition(){
  let n = parseInt(firstnumber.textContent)+parseInt(secondnumber.textContent);
 
  if(n == parseInt(Output.value)){
   Result.innerHTML="Congratulations! You Won";
   Result.style.backgroundColor="green";
  }
  
  else{
    Result.innerHTML="Oops! Please Try again";
    Result.style.backgroundColor="red";
  
  }


}

