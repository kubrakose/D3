/**
 * Created by kubrakose on 12/03/16.
 */

function items(item) {
    var textOutput = document.getElementById("disp");
    var operation1 = document.getElementById("+").value; var operation2 = document.getElementById("-").value;
    var a = document.getElementById("*2").id; var l = document.getElementById("*4").id;
    var c = document.getElementById("*1").id; var b = document.getElementById("*3").id; var p = document.getElementById("*5").id;
    if (item != "Enter") {
        // ilk once +,-,* secilirse --> error
        if (item == operation1 || item == operation2) {
            if (document.getElementById("disp").value == "") {document.getElementById("disp").value = "ERROR"}
            else {document.getElementById("disp").value = eval(document.getElementById("disp").value) + item;}}
        else if (item == a || item == l || item == c || item == b || item == p) {
            if (document.getElementById("disp").value == "" || document.getElementById("disp").value == "ERROR") {
                document.getElementById("disp").value = "ERROR"}
            else {textOutput.value = textOutput.value + item;}}
        else {
            if (document.getElementById("disp").value == "ERROR") {document.getElementById("disp").value = "ERROR"}
            else {textOutput.value = textOutput.value + item;}}}
    var sil = document.getElementById("rst").value;
    if (sil == item) {document.getElementById("disp").value = "";}
    var enter = document.getElementById("ent").value;
    if (enter == item) {
        if (document.getElementById("disp").value == "") {document.getElementById("disp").value = "0"}
        else {document.getElementById("disp").value = eval(document.getElementById("disp").value);}}
    var Output = document.getElementsByName("item");
    for (var i = 0; i < Output.length; i++) {
        if (Output[i].id == item) {Output[i].className = "selected";}
        else {Output[i].className = "item";}}
}