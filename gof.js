const a = 80;
const inputCollection = [];
var isPlaying = false;
const table = document.createElement('table');
table.name = 'mytab';
table.id = 'abc';

for (let i = 0; i < a; i++) {
    const row = table.insertRow();
    for (let j = 0; j < a; j++) {
        
        const input = document.createElement('input');
        input.classList.add('regular-checkbox');
        
        input.type = 'checkbox';
        if ((i<=1) || (i>=a-2) || (j<=1) || (j>=a-2)) {
            input.style.visibility = "hidden";
        }
        inputCollection.push(input);
        const cell = row.insertCell();
        cell.append(input);
        
    }
}


document.body.append(table);


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

function countNei(index) {
    var count = 0;
    
    if (index % a !=0 && index>a-1 && inputCollection[index - a - 1].checked) count++;
     
    if (index % a != 0 && inputCollection[index - 1].checked) count++;//fixed
    if (index % a !=0 && index < a*a-a && inputCollection[index + a - 1].checked) count++;//fixed
    if (index < a*a-a && inputCollection[index + a].checked) count++; //fixed
    if (index % a != a-1 && index < a*a-a && inputCollection[index + a + 1].checked) count++;//fixed
    if (index % a != a - 1 && inputCollection[index + 1].checked) count++;//fixed
    if (index % a != a-1 && index > a-1  && inputCollection[index - a + 1].checked) count++;//fixed
    if (index >= a && inputCollection[index - a].checked) count++;//fixed
      
    return count;
}

function clearGrid() {
    inputCollection.forEach(input => {
        if (input.checked) {
            input.checked = false;
        }
    });
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
    var storage = [];
    for (let i = 0; i < a * a; i++) {
        if (countNei(i) == 3 && inputCollection[i].checked == false) storage.push(i);
        if (countNei(i) < 2 && inputCollection[i].checked == true) storage.push(i);
        if (countNei(i) > 3 && inputCollection[i].checked == true) storage.push(i);
    }   
    
    storage.forEach(index => {   
    inputCollection[index].checked = !inputCollection[index].checked;
    });
}
