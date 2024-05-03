function valMass()
{
    let mass= document.getElementById("root").value;
    let reg = /[0-9]+$/;
    let res = mass.match(reg);
    if(res==null)
    { var span = document.getElementById("s");
        span.innerHTML ="Weight should contains only the digits";
        span.style.color ="red";
        span.style.fontSize ="30px";
        document.getElementById("root").style.border ="5px solid red"; 
    }
    else 
    {
        var span = document.getElementById("s");
        span.innerHTML="ok";
        span.style.color ="green";
        span.style.fontSize = "30px"
        document.getElementById("root").style.border ="5px solid green";
    }
    
}
function valHeight()
{
    let height = document.getElementById("root1").value;
    let reg = /[0-9 .]+$/
    let res = height.match(reg);
    if(res==null)
    {
        var span = document.getElementById("s1");
        span.innerHTML="Height should contains only digits";
        span.style.color="red";
        span.style.fontSize="30px";
        document.getElementById("root1").style.border="5px solid red";
    }
    else 
    {
        var span = document.getElementById("s1");
        span.innerHTML="ok";
        span.style.color="green";
        span.style.fontSize="30px";
        document.getElementById("root1").style.border="5px solid green";
    }

}
function calBMI()
{
    const mass = document.getElementById("root").value;
    const height = document.getElementById("root1").value;
    const bmi =  mass/(height*height);
    var span = document.getElementById("s2");
    span.innerHTML=`Your BMI is-->${bmi}`;
    span.style.color="darkblue";
    span.style.fontSize="40px";
}
