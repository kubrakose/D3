/**
 * Created by kubrakose on 06/03/16.
 */


//Q1
function isDİv(N){
    var i=1;
    while(i<N+1){
        if (i%2==0 && i%3!=0) {console.log("Even")}
        else if(i%3==0 && i%2!=0){console.log("Bingo!")}
        else if(i%2==0 && i%3==0){console.log("Bingo!")}
        else{console.log(i)}
    i++;
}}
(isDİv(6));

//Q2
function upperFirst(string){
    //var u=string[0].toUpperCase()+string.substr(1);
    //console.log(u)
    var arry=string.split(" ");
    var nw=[];
    for (var i=0; i<arry.length; i++){
        nw.push(arry[i][0].toUpperCase()+arry[i].substr(1));
    }
    console.log(nw.join(" "))
}
upperFirst("abc bnm");

//Q3
function reverseString(string){
    var i=1;
    var s="";
    while(i<string.length+1){
        s=s+string.substr(-i)[0];
        i++
    }
    return s
}
console.log(reverseString("abc lkm"));

//Q4
function isPalindrome(string){
    var v=((string.toLowerCase()).split(" "));
    //console.log(v);
    //console.log(v.join(""));
    var vv=(v.join(""));
    if(vv==reverseString(vv)){
        return (true);
    }
    return (false)
}
console.log(isPalindrome("eye bn"));

//Q5
function hist(array){
    var d={};
    for(var i=0; i<array.length; i++){
        if((Object.keys(d).indexOf(array[i]))<0){d[array[i]]=1}
        else if((Object.keys(d).indexOf(array[i]))>=0){d[array[i]]++}}
    var k=(Object.keys(d).sort(function(a,b){
        //console.log(a,b,d[a]-d[b]);
        return d[a]-d[b]}));
    //console.log(k);
    for (var x=0; x<3; x++){
        var p=k.pop();
        console.log(p,d[p]);
    }
}
(hist(['a', 'e', 1, 'a', 'e', 'a', 'b', 3, 'c', 'a', 'c', 5, 'd', 'e', 'b', 7, 'e', 'c', 'e']));
