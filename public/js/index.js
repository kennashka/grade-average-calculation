document.getElementById("button").onclick=function(){
var a = document.getElementById("1").value * 0.4;
var b = document.getElementById("2").value * 0.4;
var c = document.getElementById("3").value * 0.2;
var grade = a + b + c;
document.getElementById("ans").innerHTML = grade;
if (grade >=90){document.getElementById("an").innerHTML="You got an A."} 
else if (grade >= 80){document.getElementById("an").innerHTML="You got a B"} 
else if (grade >=70){document.getElementById("an").innerHTML="You got a C"}
else if (grade >=60){document.getElementById("and").innerHTML="You got a D"}  
else if (grade <=59){document.getElementById("and").innerHTML="You got a F"}  


  }

    function myFunction() {
      document.getElementById('and').innerHTML = '';
      document.getElementById("ans").innerHTML = '';
      document.getElementById("an").innerHTML = '';
      document.getElementById("1").value=0;
       document.getElementById("2").value=0;
      document.getElementById("3").value=0;
    }



