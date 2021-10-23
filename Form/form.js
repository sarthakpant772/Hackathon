

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
}



