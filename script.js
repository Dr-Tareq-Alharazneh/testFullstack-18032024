const data = [[1, 'mohamed', 30],
[2, 'Ahmad', 25],
[3, 'Omar', 16]];
let tbody = document.getElementById("tbody");
let str = '';
console.log(data.length);
for (i = 0; i < data.length; i++) {
    str = str + "<tr>"
    for (j = 0; j < data[0].length; j++) {
        str = str + "<td>" + data[i][j] + "</td>"
    }
    str = str + "</tr>"
}
console.log(data[0].length);
console.log(str);

function filldata() {
    tbody.innerHTML = str;
}