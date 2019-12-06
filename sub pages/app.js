const inch = 25.4;

function calcInch() {
       var a = document.getElementById("userInputInch").value;
        var resultInch = Math.round((inch * a)*1000)/1000;
 console.log(resultInch);
 document.getElementById("endInch").innerHTML = resultInch +'mm';
}

function calcHole360() {
       var b = document.getElementById("userInputHole360").value;
        var resultHole360 = Math.round((360 / b)*1000)/1000;
 console.log(resultHole360);
 document.getElementById("endHole360").innerHTML = b +' отв. шаг '+resultHole360 + '°';
}

function calcAngle() {
       var leg1 = document.getElementById("userInputLeg1").value;
       var leg2 = document.getElementById("userInputLeg2").value;
        var resultAngle1 = Math.round(((Math.atan(leg1 / leg2) * 180) / Math.PI)*1000)/1000;
        var resultAngle2 = Math.round((90 - resultAngle1)*1000)/1000;
 console.log(resultAngle1);
 document.getElementById("endAngle1").innerHTML = "Угол А = " + resultAngle1; 
 document.getElementById("endAngle2").innerHTML = "Угол B = " + resultAngle2;
}

