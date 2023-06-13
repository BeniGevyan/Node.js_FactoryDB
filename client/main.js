const r =  `
<tr>
<th>כותרת 1</th>
<th>כותרת 2</th>
<th>כותרת 3</th>
</tr>
<tr>
<td>שורה 1, תא 1</td>
<td>שורה 1, תא 2</td>
<td>שורה 1, תא 3</td>
</tr>
<tr>
<td>שורה 2, תא 1</td>
<td>שורה 2, תא 2</td>
<td>שורה 2, תא 3</td>
</tr>
<tr>
<td>שורה 3, תא 1</td>
<td>שורה 3, תא 2</td>
<td>שורה 3, תא 3</td>
</tr>
`
function login() {
    const username = document.getElementsByClassName('username')[0].value;
    const password = document.getElementsByClassName('password')[0].value;
    document.getElementById('111').style.visibility = "hidden";
    console.log(username, password);
    data(username)
}

function data(x) {
    document.getElementById('122').innerHTML = ` <h1 class="">${x}</h1>`;
    document.getElementById("123").innerHTML = r
}