

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



