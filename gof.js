const a = 150;
var isPlaying = false;
var interv;
var resultTable = '<table name = "mytab" cellspacing="0" cellpadding="0">';
for (var i = 0; i < a; i++) {
    resultTable += '<tr>';
    for (var j = 0; j < a; j++) {
    var uid = i+'.'+j;
        resultTable += '<td class="container"><input type="checkbox" id="'+uid+'" class="regular-checkbox"><\/td>';
    }
}

resultTable += '<\/tr>';
resultTable += '<\/table>';
var target = document.getElementById('myElement');
target.innerHTML = resultTable;

document.body.style.overflow = 'hidden';


function reset() {
   count = 1
   var hovers = document.querySelectorAll('.hover')
   for(var i = 0; i < hovers.length; i++ ) {
      hovers[i].classList.remove('hover')
   }
}

document.addEventListener('mouseover', function() {
   mousein = true
   reset()
})


function countNei(ida) {
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

function clearGrid() {
    if (isPlaying) play();
    for (var i = 0; i < a; i++) {       
        for (var j = 0; j < a; j++) {
        var yy = i + '.' + j;
        document.getElementById(yy).checked = false;
        }  
    }
}

function play(){    
        
     if (isPlaying==false) {
        interv = setInterval(nextGen, 100);
        document.getElementById('play01').innerHTML = 'Pause';
     } else {
         clearInterval(interv);
         document.getElementById('play01').innerHTML = 'Play';
     }
     isPlaying = !isPlaying;
        
}
function nextGen() {
    
    var storage = new Array(a*a);
    counter = 0;
    for (var i = 0; i < a; i++) {       
        for (var j = 0; j < a; j++) {
        //var yy = i + '.' + j;
        storage[counter] = countNei(i + "." + j);
        counter++;
        }
    }
    counter = 0
    for (var i = 0; i < a; i++) {
        for (var j = 0; j < a; j++) {
        var yy = i + '.' + j;
        if (storage[counter]<2) {           
            document.getElementById(yy).checked=false;
        }
        if (storage[counter]==3) {
            document.getElementById(yy).checked=true;
        }
        if (storage[counter]>3) {
            document.getElementById(yy).checked=false;;
        }
            counter++;
        }
        }
    }
 