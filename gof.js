var a = 50;
var b = 50;
var resultTable = '<table cellspacing="0" cellpadding="0">';

for (var i = 0; i < parseInt(a); i++) {
    resultTable += '<tr>';
    for (var j = 0; j < parseInt(b); j++)
        resultTable += '<td class="container"><input type="checkbox" class="regular-checkbox"><\/td>';
}
resultTable += '<\/tr>';
resultTable += '<\/table>';
var target = document.getElementById('myElement');
target.innerHTML = resultTable;
