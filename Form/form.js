

function display1() {
  //  console.log("Hello");
  
    document.getElementById("qu1").className = "question-1 na";
    document.getElementById("qu2").className = "question-2";
}
function display2() {
  //  console.log("Hello");
  
    document.getElementById("qu2").className = "question-2 na";
    document.getElementById("qu3").className = "question-3";
}
function display3() {
   // console.log("Hello");
  
    document.getElementById("qu3").className = "question-3 na";
    document.getElementById("qu4").className = "question-4";
}
function display4() {
  //  console.log("Hello");
  
    document.getElementById("qu4").className = "question-4 na";
    document.getElementById("qu5").className = "question-5";
}
function display5() {
  //  console.log("Hello");
  
    document.getElementById("qu5").className = "question-5 na";
    document.getElementById("qu6").className = "question-6";
}

function displayRadioValue() {
  var c = Number(0);
  var ele = document.getElementsByName("ans1");
    
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked){
         c +=parseInt(ele[i].value,10);
        // console.log(ele[i].value);
    }
  }

  var ele = document.getElementsByName("ans2");
    
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked){
      c +=parseInt(ele[i].value,10);

        // console.log(ele[i].value);
    }
  }

  var ele = document.getElementsByName("ans3");
    
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked){
      c +=parseInt(ele[i].value,10);

        // console.log(ele[i].value);
    }
  }

  var ele = document.getElementsByName("ans4");
    
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked){
      c +=parseInt(ele[i].value,10);

        // console.log(ele[i].value);
    }
  }

  var ele = document.getElementsByName("ans5");
    
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked){
      c +=parseInt(ele[i].value,10);

        // console.log(ele[i].value);
    }
  }

  var ele = document.getElementsByName("ans6");
    
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked){
      c +=parseInt(ele[i].value,10);

        // console.log(ele[i].value);
    }
  }
  // console.log(c);
  console.log(c);

  localStorage.setItem('path_no',c);
  var d=0;
// dsa
if(c===1227 || c===1326 || c === 2325 || c === 2326 || c===2327 || c===2330 ){
  d=6;
  localStorage.setItem('path_id',d);
}
// web
if(c === 144 || c=== 145 || c=== 146 || c=== 147){
  d=0;
  localStorage.setItem('path_id',d);
}
// ml
if(c=== 244 || c=== 245 || c=== 246 || c===247 ){
  d=2;
  localStorage.setItem('path_id',d);
}
// android
if(c=== 1244 || c=== 1245 || c=== 1246 || c=== 1247 ){
  d=1;
  localStorage.setItem('path_id',d);
}
// web+dsa
if(c=== 233 || c=== 234 || c=== 235 || c===236 ){
  d=3;
  localStorage.setItem('path_id',d);
}
// ml+dsa
if(c=== 333 || c=== 334 || c=== 335 || c===336 ){
  d=5;
  localStorage.setItem('path_id',d);
}
// and+dsa
if(c === 1333 || c === 1334 || c === 1335 || c === 1336 ){
  d=4;
  localStorage.setItem('path_id',d);
}
}