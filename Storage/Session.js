function clickButtonFunction() 
{
    if (sessionStorage.getItem("clickCounter") === null) 
    {
      sessionStorage.setItem("clickCounter", "0");
    }

    var value = parseInt(sessionStorage.getItem("clickCounter"));
    var newValue = value + 1
    sessionStorage.setItem("clickCounter", newValue);
    document.getElementById("clickCounter").innerHTML = newValue
    console.log(newValue)
}
  

function clickReset() 
{
  
    sessionStorage.setItem("clickCounter", "0");
    document.getElementById("clickCounter").innerHTML = '0'
}