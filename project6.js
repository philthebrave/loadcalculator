// Sum as you click checkboxes
function addup(){
    let checkboxes = document.querySelectorAll('input[name="kit"]:checked');
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });

    let sum = 0;
    for (let i = 0; i < values.length; i++) {
        sum += Number(values[i]);
    }
    var changeContent = document.getElementById('weight').innerHTML = sum + "kg";

    if (sum <= 12) {
        var changeContent = document.getElementById('guidance').innerHTML = "Fighting order, suitable for fire and manoeuvre.";
    } else if (sum <= 21) {
        var changeContent = document.getElementById('guidance').innerHTML = "Patrol order, suitable for fast movement (max speed: 7km/h).";
    } else if (sum <= 35) {
        var changeContent = document.getElementById('guidance').innerHTML = "Marching order, suitable for slow movement (max speed: 4km/h).";
    } else {
        var changeContent = document.getElementById('guidance').innerHTML = "Too much weight, reduce to maximum of 35kg.";
    }
}

// Clear button
function uncheckall(chk){
    for (i=0;i<chk.length;i++){
        chk[i].checked=false
    }
    var changeContent = document.getElementById('weight').innerHTML = "0kg";
    var changeContent = document.getElementById('guidance').innerHTML = "Fighting order, suitable for fire and manouevre.";
}