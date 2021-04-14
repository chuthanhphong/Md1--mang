let x = 0;
let array = Array();

function ham1() {
    array[x] = document.getElementById(' txtvalue').value;
    alert(" Element : " + array[x] + 'Add  at index' + x);
    x++;
    document.getElementById(' txtvalue').value = "";

}

// function ham2() {
//     let e = "<hr/>"
//     for (let i = 0; i < array.length; i++) {
//         e = e + " Element " + i + '=' + array[i] + '</br>';
//     }
//     document.getElementById('result').innerHTML = e
// }
function ham2() {
    let e = "<hr/>";
    for (let i = 0; i < array.length; i++) {
        e += "Element " + i + " = " + array[i] + "<br/>";
    }
    document.getElementById("result").innerHTML = e;
}