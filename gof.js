const a = 130;
var isPlaying = false;
var interv;
var resultTable = '<table name = "mytab" id = "Sakis" cellspacing="0" cellpadding="0">';
for (var i = 0; i < a; i++) {
    resultTable += '<tr>';
    for (var j = 0; j < a; j++) {
        var uid = i + '.' + j;
        resultTable += '<td class="container"><input type="checkbox" id="' + uid + '" class="regular-checkbox"><\/td>';
    }
}

resultTable += '<\/tr>';
resultTable += '<\/table>';
var target = document.getElementById('myElement');
target.innerHTML = resultTable;

function rpent() {

document.getElementById("30.60").checked=true;
document.getElementById("31.60").checked=true;
document.getElementById("32.60").checked=true;
document.getElementById("31.59").checked=true;
document.getElementById("30.61").checked=true;


}
function glider() {
    document.getElementById("15.30").checked=true;
    document.getElementById("16.31").checked=true;
    document.getElementById("17.31").checked=true;
    document.getElementById("17.30").checked=true;  
    document.getElementById("17.29").checked=true;  

}

function gosper(){
    document.getElementById("25.40").checked=true;
    document.getElementById("25.41").checked=true;
    document.getElementById("26.40").checked=true;
    document.getElementById("26.41").checked=true;
    document.getElementById("25.50").checked=true;
    document.getElementById("26.50").checked=true;
    document.getElementById("27.50").checked=true;
    document.getElementById("24.51").checked=true;
    document.getElementById("28.51").checked=true;
    document.getElementById("23.52").checked=true;
    document.getElementById("23.53").checked=true;
    document.getElementById("29.52").checked=true;
    document.getElementById("29.53").checked=true;
    document.getElementById("26.54").checked=true;
    document.getElementById("24.55").checked=true;
    document.getElementById("28.55").checked=true;
    document.getElementById("25.56").checked=true;
    document.getElementById("26.56").checked=true;
    document.getElementById("27.56").checked=true;
    document.getElementById("26.57").checked=true;
    document.getElementById("25.60").checked=true;
    document.getElementById("25.61").checked=true;
    document.getElementById("24.60").checked=true;
    document.getElementById("24.61").checked=true;
    document.getElementById("23.60").checked=true;
    document.getElementById("23.61").checked=true;
    document.getElementById("22.62").checked=true;
    document.getElementById("26.62").checked=true;
    document.getElementById("22.64").checked=true;
    document.getElementById("26.64").checked=true;
    document.getElementById("21.64").checked=true;
    document.getElementById("27.64").checked=true;
    document.getElementById("23.74").checked=true;
    document.getElementById("24.74").checked=true;
    document.getElementById("23.75").checked=true;
    document.getElementById("24.75").checked=true;
}

function reset() {
    count = 1
    var hovers = document.querySelectorAll('.hover')
    for (var i = 0; i < hovers.length; i++) {
        hovers[i].classList.remove('hover')
    }
}

document.addEventListener('mouseover', function () {
    mousein = true
    reset()
})


function countNei(ida) {
    var count = 0;
    var coordinates = ida.split(".");
    var aaa = parseInt(coordinates[0]);
    var bbb = parseInt(coordinates[1]);
    if (document.getElementById((aaa - 1) + '.' + (bbb - 1)).checked) count++;
    if (document.getElementById((aaa - 1) + '.' + bbb).checked) count++;
    if (document.getElementById((aaa - 1) + '.' + (bbb + 1)).checked) count++;
    if (document.getElementById(aaa + '.' + (bbb - 1)).checked) count++;
    if (document.getElementById(aaa + '.' + (bbb + 1)).checked) count++;
    if (document.getElementById((aaa + 1) + '.' + (bbb - 1)).checked) count++;
    if (document.getElementById((aaa + 1) + '.' + bbb).checked) count++;
    if (document.getElementById((aaa + 1) + '.' + (bbb + 1)).checked) count++;
    return count;
}

function clearGrid() {
    if (isPlaying) play();
    for (var i = 0; i < a; i++) {
        for (var j = 0; j < a; j++) {
            var yy = i + '.' + j;
            document.getElementById(yy).checked = false;
        }
    }
}

function play() {

    if (!isPlaying) {
        interv = setInterval(nextGen, 100);
        document.getElementById('play01').innerHTML = '<b>Pause</b>';
    } else {
        clearInterval(interv);
        document.getElementById('play01').innerHTML = '<b>Play</b>';
    }
    isPlaying = !isPlaying;

}
function nextGen() {

    var storage = new Array();
    counter = 0;
    for (var i = 1; i < a-1; i++) {
        for (var j = 1; j < a-1; j++) {
            if ((countNei(i + "." + j) < 2 || (countNei(i + "." + j) > 3)) && (document.getElementById(i + "." + j).checked == true)) {
                storage[counter] = i + "." + j;
                counter++;
            }
            if ((countNei(i + "." + j) == 3) && (document.getElementById(i + "." + j).checked == false)) {
                storage[counter] = i + "." + j;
                counter++;
            }
            
        }
    }
    
    for (var counter = 0; counter < storage.length; counter++) {     
        document.getElementById(storage[counter]).checked = !document.getElementById(storage[counter]).checked;
    }
    
}
