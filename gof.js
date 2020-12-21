const a = 30;
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
    if (index - a - 1 >= 0 && inputCollection[index - a - 1].checked) count++;
    if (index - 1 > 0 && inputCollection[index - 1].checked) count++;
    if (index + a - 1 <= a*a-1 && inputCollection[index + a - 1].checked) count++;
    if (index + a <= a*a-1 && inputCollection[index + a].checked) count++;
    if (index + a + 1 <= a*a-1 && inputCollection[index + a + 1].checked) count++;
    if (index + 1 <= a*a-1 && inputCollection[index + 1].checked) count++;
    if (index - a + 1 >= 0 && inputCollection[index - a + 1].checked) count++;
    if (index - a >= 0 && inputCollection[index - a].checked) count++;
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
