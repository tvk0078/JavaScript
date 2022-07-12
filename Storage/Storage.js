function clickButtonFunction() 
{
    if (localStorage.getItem("clickCounter") === null) 
    {
      localStorage.setItem("clickCounter", "0");
    }

    var value = parseInt(localStorage.getItem("clickCounter"));
    var newValue = value + 1
    localStorage.setItem("clickCounter", newValue);
    document.getElementById("clickCounter").innerHTML = newValue
    console.log(newValue)
}
  

function clickReset() 
{
  
    localStorage.setItem("clickCounter", "0");
    document.getElementById("clickCounter").innerHTML = '0'
}
