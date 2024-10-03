
var hourSp = document.getElementById("hour")
var minSp = document.getElementById("min")
var secSp = document.getElementById("sec")
var pam = [" A.M"," P.M"]

setInterval(() => {
    var myTime = new Date()


    if (hourSp > 12) {
        hourSp.innerText = myTime.getHours()-12 + " : "
        minSp.innerText = myTime.getMinutes() + " : "
        secSp.innerText = myTime.getSeconds() + pam[0]
    }
    else{
        hourSp.innerText = myTime.getHours()-12 + " : "
        minSp.innerText = myTime.getMinutes() + " : "
        secSp.innerText = myTime.getSeconds() + pam[1]
    }

}, 1000);