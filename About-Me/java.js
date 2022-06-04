var a1,a2,a3;
function show1()
{
    if(a1==1)
    {
        document.getElementById("card1").style.display="inline-block";
        return a1=0;
    }
    else
    {
        document.getElementById("card1").style.display="none";
        return a1=1;
    }
}

function show2()
{
    if(a2==1)
    {
        document.getElementById("card2").style.display="inline-block";
        return a2=0;
    }
    else
    {
        document.getElementById("card2").style.display="none";
        return a2=1;
    }
}


function show3()
{
    if(a3==1)
    {
        document.getElementById("card3").style.display="inline-block";
        return a3=0;
    }
    else
    {
        document.getElementById("card3").style.display="none";
        return a3=1;
    }
}