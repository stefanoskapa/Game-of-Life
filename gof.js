const a = 200;
var resultTable = '<table name = "mytab" cellspacing="0" cellpadding="0">';
for (var i = 0; i < parseInt(a); i++) {
    resultTable += '<tr>';
    for (var j = 0; j < parseInt(a); j++) {
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
    var aaa = parseInt(coordinates[0]);
    var bbb = parseInt(coordinates[1]);
    if ((aaa-1 >=0 && bbb-1 >=0) && (document.getElementById((aaa - 1) + '.' + (bbb - 1)).checked)) count++;        
    if ((aaa-1 >=0 && document.getElementById((aaa - 1) + '.' + bbb).checked)) count++;
    if ((aaa-1 >=0 && bbb+1<=a-1) && (document.getElementById((aaa - 1) + '.' + (bbb + 1)).checked)) count++;
    if ((bbb-1 >=0 && document.getElementById(aaa + '.' + (bbb - 1)).checked)) count++;
    if ((bbb+1 <= a-1 && document.getElementById(aaa + '.' + (bbb + 1)).checked)) count++;
    if ((aaa+1 <=a-1 && bbb-1 >=0) && (document.getElementById((aaa + 1) +'.' + (bbb - 1)).checked)) count++;
    if ((aaa+1 <=a-1 && document.getElementById((aaa + 1) + '.' + bbb).checked)) count++;
    if ((aaa+1 <=a-1 && bbb+1<=a-1) && (document.getElementById((aaa + 1) + '.' + (bbb + 1)).checked)) count++;
    
    return count;
}

function play(){    
        setInterval(nextGen, 300);
}
function nextGen() {
    
    var storage = new Array(250);
    counta = 0;
    for (var i = 0; i < parseInt(a); i++) {       
        for (var j = 0; j < parseInt(a); j++) {
        var yy = i + '.' + j;
        storage[counta] = aliveNeigh(yy);
        counta++;
        }
    }
    counta = 0
    for (var i = 0; i < parseInt(a); i++) {
        for (var j = 0; j < parseInt(a); j++) {
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



