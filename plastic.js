/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }




  let valueDisplays = document.querySelectorAll(".nums");
  let interval = 1000;
  valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    console.log(endValue);

    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function(){
      startValue+=1;
      valueDisplay.textContent = startValue;
      if(startValue == endValue){
        clearInterval(counter);
      }
    }, duration);
  });
  