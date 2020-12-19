var a = 50;
var b = 50;
var resultTable = '<table name = "mytab" cellspacing="0" cellpadding="0">';
for (var i = 0; i < parseInt(a); i++) {
    resultTable += '<tr>';
    for (var j = 0; j < parseInt(b); j++) {
    var uid = i+'.'+j;
        resultTable += '<td class="container"><input type="checkbox" id="'+uid+'" class="regular-checkbox"><\/td>';
    }
}
resultTable += '<\/tr>';
resultTable += '<\/table>';
var target = document.getElementById('myElement');
target.innerHTML = resultTable;
function aliveNeigh(ida) {
    var count=0;
    var coordinates = ida.split(".");
   /* alert(parseInt(coordinates[0]) + '.' + coordinates[1]);*/
    var aaa = parseInt(coordinates[0]);
    
    var bbb = parseInt(coordinates[1]);
    /*alert(aMin+'.'+ aPlu + '.' + bMin+ '.' +bPlu);*/

    if (aaa-1 >=0 && bbb-1 >=0) {
        if (document.getElementById((aaa - 1) + '.' + (bbb - 1)).checked) count++;        
    }
    if (aaa-1 >=0) {
        if (document.getElementById((aaa - 1) + '.' + bbb).checked) count++;
    }
    if (aaa-1 >=0 && bbb+1 <=49) {
        if (document.getElementById((aaa - 1) + '.' + (bbb + 1)).checked) count++;
    }
    if (bbb-1 >=0) {
        if (document.getElementById(aaa + '.' + (bbb - 1)).checked) count++;
    }
    if (bbb+1 <=49) {
        if (document.getElementById(aaa + '.' + (bbb + 1)).checked) count++;
    }
    if (aaa+1 <=49 && bbb-1 >=0) {
        if (document.getElementById((aaa + 1) +'.' + (bbb - 1)).checked) count++;
    }
    if (aaa+1 <=49) {
        if (document.getElementById((aaa + 1) + '.' + bbb).checked) count++;
    }
    if (aaa+1 <=49 && bbb+1 <=49) {
        if (document.getElementById((aaa + 1) + '.' + (bbb + 1)).checked) count++;
    }
    return count;
    /*alert(count);*/
}
function startGame() {
    var c = 50;
    var d = 50;
    var storage = new Array(250);
    counta = 0;
    for (var i = 0; i < parseInt(c); i++) {
        
        for (var j = 0; j < parseInt(d); j++) {
        var yy = i + '.' + j;
        storage[counta] = aliveNeigh(yy);
        counta++;
        }
    }
    counta = 0
    for (var i = 0; i < parseInt(c); i++) {
        
        for (var j = 0; j < parseInt(d); j++) {
        var yy = i + '.' + j;
        if (storage[counta]<2) {           
            document.getElementById(yy).checked=false;
        }
        if (storage[counta]==3) {
            document.getElementById(yy).checked=true;
        }
        if (storage[counta]>3) {
            document.getElementById(yy).checked=false;;
        }
            counta++;
            
        }
        }
    }



